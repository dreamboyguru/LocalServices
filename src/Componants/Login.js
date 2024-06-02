import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = ({loginType, loginShow, userRegShow, VendorRegShow}) => {
    // Define the validation schema with Yup
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    });

    // Handle form submission
    const handleSubmit = (values) => {
        console.log(values);
        if(loginType === 'User') {
            localStorage.setItem('type', 'Component1');
        } else if(loginType === 'Vendor') {
            localStorage.setItem('type', 'Component2');
        } else if(loginType === 'Admin') {
            localStorage.setItem('type', 'Component3');
        }
        window.location.reload();
    };

    return (
        <div className='flex justify-center px-5'>
            <div className='absolute bg-gray-500 w-1/3 max-md:w-[98%] p-4 max-md:p-1 text-white z-40 mt-20 max-md:mt-32 mx-5 rounded-md shadow-lg'>
                <RiCloseLine 
                    className='absolute top-1 right-1 text-2xl cursor-pointer hover:scale-150' 
                    onClick={loginShow}
                />
                <div className='text-2xl max-md:text-lg font-bold text-center border-b-2 pb-2 mb-4 max-md:mb-2'>{loginType} Login Form</div>
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
                                            <label className='w-1/3 max-md:w-full pl-2 py-2 font-semibold'>Email</label>
                                            <div className='flex justify-end w-2/3 pr-2'>
                                                <ErrorMessage name='email' component='div' className='text-red-500 pl-2' />
                                            </div>
                                        </div>
                                        <Field name='email' type='email' className='rounded-b-md pl-2 py-2 focus:outline-none' />
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
                                <div className='flex justify-end'>
                                    <button type='submit' className='bg-white hover:bg-gray-300 text-black py-2 px-6 rounded-md'>Submit</button>
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
