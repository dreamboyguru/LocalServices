import React, { useEffect, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const Login = ({loginType, loginShow, userRegShow, VendorRegShow}) => {
    const url = process.env.REACT_APP_API_URL;
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState('');
    // Define the validation schema with Yup
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    });

    const loginVendor = async(values) =>{
        const {email, password} = values;
        try {
            const response = await axios.post(`${url}/api/vendor/login`,{
                email,
                password
            });
            console.log(response);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('type', 'Component2');
                window.location.reload();
            } else {
                setErrorMessage('Invalid login credentials');
            }
        } catch (err) {
            setErrorMessage(err.response.data.error);
            console.log(err);
        }
    }

    // Handle form submission
    const handleSubmit = (values) => {
        // console.log(values);
        // const {email, password} = values;
        if(loginType === 'User') {
            localStorage.setItem('type', 'Component1');
        } else if(loginType === 'Vendor') {
            loginVendor(values);
        } else if(loginType === 'Admin') {
            if(values.email === 'admin' && values.password === 'admin') {
                localStorage.setItem('adminAuth', true);
                localStorage.setItem('type', 'Component3');
            } else{
                setErrorMessage('User Name and Password Wrong')
                return
            }
        }
        // window.location.reload();
    };

    return (
        <div className='flex justify-center px-5 '>
            <div className='absolute bg-gray-500 w-1/3 max-md:w-[90%] p-4 max-md:p-2 text-white z-40 mt-20 max-md:mt-24 rounded-md shadow-lg bg-opacity-90'>
                <RiCloseLine 
                    className='absolute top-1 right-1 text-2xl cursor-pointer hover:scale-150' 
                    onClick={loginShow}
                />
                <div className='text-2xl max-md:text-lg font-bold text-center border-b-2 pb-2 mb-4 max-md:mb-2'>{loginType} Login Form</div>
                {errorMessage && <div className='flex justify-center text-red-300 sm:-mt-3 text-sm max-md:text-xs pb-0.5'>{errorMessage}</div>}
                <div className='border rounded-md border-gray-400 p-4 max-md:p-1'>
                    <Formik
                        initialValues={{
                            email : '',
                            password : '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue }) => (
                            <Form>
                                <div className='flex flex-wrap justify-between text-sm max-md:text-xs font-serif'>
                                    <div className='w-full bg-gray-100 flex flex-col rounded-md text-black mb-4'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 font-semibold'>UserName</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='email' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='email' type='text' className='rounded-b-md pl-2 py-2 focus:outline-none' />
                                    </div>
                                    <div className='w-full bg-gray-100 flex flex-col rounded-md text-black mb-4'>
                                        <div className='flex felx-col max-md:flex-row items-center'>
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 font-semibold'> Password</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='password' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='password' type='text' className='rounded-b-md pl-2 py-2 focus:outline-none' />
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className=' text-gray-50 hover:cursor-wait ml-5 max-md:ml-1'>
                                        Forgot password ?
                                    </div>
                                    <div className='mr-5 max-md:mr-2'>
                                        <button type='submit' className='bg-gray-300 hover:bg-gray-50 text-black py-2 max-md:py-1 px-6 rounded-md'>Submit</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                {loginType === 'Admin' ? null :
                    <div className='font-bold text-white pt-2 px-5'>
                        For Registration 
                        <span
                            className='text-blue-700 hover:cursor-pointer hover:text-blue-800 pl-1'
                            onClick={loginType === 'User' ? userRegShow : loginType === 'Vendor' ? VendorRegShow : null}
                        > Click here </span> 
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;
