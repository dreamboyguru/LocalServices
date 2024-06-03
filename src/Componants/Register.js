import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = ({regType, RegistrationShow, userLoginShow, vendorLoginShow}) => {
    const [loginBox, setLoginBox] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    const url = process.env.REACT_APP_API_URL;
    
    // Define the validation schema with Yup
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().min(10, '10 digit Required').max(10, '10 digit Required').required('Required'),
        address: Yup.string().min(20,'min 20 charactor').required('Address is Required'),
        photo: Yup.mixed().required('Photo is Required'),
        password: Yup.string().required('Required').min(4, 'min 4 characters'),
        reEnter: Yup.string()
            .required('re-enter password')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    // Handle form submission
    const handleSubmit = (values) => {
        console.log(values);
        if (regType === 'User') {
            return;
        } else if (regType === 'Vendor') {
            const formData = new FormData();
            formData.append('firstName', values.firstName);
            formData.append('lastName', values.lastName);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('address', values.address);
            formData.append('photo', values.photo);
            formData.append('password', values.password);
            formData.append('reEnter', values.reEnter);
            axios.post(`${url}/vendor/register/api`, formData, {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response.data);
                    if(response.status === 200) {
                        setLoginBox(true);
                    }
                })
                .catch(err => {
                    console.error('Error registering vendor:', err);
                    setErrorMsg(err.response.data.message);
                    setError(true)
                });
        }
    };

    return (
        <div className='flex justify-center px-5'>
            {loginBox && userLoginShow()}
            <div className='absolute bg-gray-500 w-1/2 max-md:w-[98%] p-4 max-md:p-2 max-md:mx-1 text-white z-40 mt-8 max-md:mt-24 rounded-md shadow-lg bg-opacity-90'>
                <RiCloseLine 
                    className='absolute top-1 right-1 text-2xl cursor-pointer hover:scale-150' 
                    onClick={RegistrationShow}
                />
                <div className='text-2xl max-md:text-lg font-bold text-center border-b-2 pb-2 mb-4 max-md:mb-2'>{regType} Registration Form</div>
                {error && <div className='flex justify-center text-lg max-md:text-sm -mt-3 text-red-500'>{errorMsg}</div>}
                <div className='border rounded-md border-gray-400 p-4 max-md:p-1'>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            address: '',
                            photo: null,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue }) => (
                            <Form>
                                <div className='flex flex-wrap justify-between text-sm max-md:text-xs font-serif'>
                                    <div className='w-[48%] bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'> First Name</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='firstName' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='firstName' type='text' className='rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' />
                                    </div>
                                    <div className='w-[48%] bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'> Last Name</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='lastName' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='lastName' type='text' className='rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' />
                                    </div>
                                    <div className='w-[48%] bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'>Email</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='email' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='email' type='email' className='rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' />
                                    </div>
                                    <div className='w-[48%] bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'>Phone no</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='phone' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='phone' type='number' className='rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' />
                                    </div>
                                    <div className='w-full bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'>Address</label>
                                            <div className='flex justify-left w-2/3 pr-2'>
                                                <ErrorMessage name='address' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='address' as='textarea' className='h-20 max-md:h-10 rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' />
                                    </div>
                                    <div className='w-full bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'>Photo</label>
                                            <div className='flex justify-left w-2/3 pr-2'>
                                                <ErrorMessage name='photo' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <input 
                                            name='photo' 
                                            type='file' 
                                            className='rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' 
                                            onChange={(event) => {
                                                setFieldValue('photo', event.currentTarget.files[0]);
                                            }}
                                        />
                                    </div>
                                    <div className='w-[48%] bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'> Password</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='password' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='password' type='text' className='rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' />
                                    </div>
                                    <div className='w-[48%] bg-gray-100 flex flex-col rounded-md text-black mb-4 max-md:mb-2'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 max-md:py-0.5 font-semibold'>Re-Enter</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='reEnter' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='reEnter' type='text' className='rounded-b-md pl-2 py-2 max-md:py-0.5 focus:outline-none' />
                                    </div>
                                </div>
                                
                                <div className='w-full'>
                                        <button type='submit' className='w-full bg-gray-300 hover:bg-gray-50 text-black py-2 max-md:py-1 rounded-t-md'>Submit</button>
                                    </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='font-bold text-white pt-2 px-5 max-md:text-sm max-md:py-1 max-md:text-center '>
                    For Login 
                    <span
                        className='text-blue-700 hover:cursor-pointer hover:text-blue-800 pl-1'
                        onClick={regType === 'User' ? userLoginShow : regType === 'Vendor' ? vendorLoginShow : null}
                    > Click here </span> 
                </div>
            </div>
        </div>
    );
};

export default Register;
