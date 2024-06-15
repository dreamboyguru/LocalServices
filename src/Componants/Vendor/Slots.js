import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
    oneDay: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    oneWeek: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    oneMonth: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
});

const Slots = () => {
    const [ratesData, setRatesData] = useState([]);
    const [loading, setLoading] = useState(false)
    const email = localStorage.getItem('email')
    const url = process.env.REACT_APP_API_URL;
    const initialValues = {
        oneDay: '',
        oneWeek: '',
        oneMonth: '',
    };

    useEffect(()=>{
        setLoading(true)
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/rates/${email}`);
                console.log(response.data);
                setRatesData(response.data);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        } 
        fetchData()
    }, [])

    const handleSubmit = async (values, { setSubmitting }) => {
        setLoading(true)
        try {
            const response = await axios.put(`${url}/api/rates`, {values, email});
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center'>
            { loading ? 
                <div>loading...</div> :
                <div className='min-h-96 text-2xl w-[50%] mt-20 max-md:w-full text-black overflow-x-auto'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <table className="min-w-full border-collapse border border-gray-300 shadow-lg text-lg">
                                    <thead>
                                        <tr className="bg-gray-500 text-white max-md:text-sm">
                                            <th className="border border-gray-300 px-4 py-2 w-1/12 max-md:px-1">SL.No</th>
                                            <th className="border border-gray-300 px-4 py-2 w-3/12 max-md:px-1">Duration</th>
                                            <th className="border border-gray-300 px-4 py-2 w-4/12 max-md:px-1">Rates</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                                            <td className="border border-gray-300 px-4 py-2">1</td>
                                            <td className="border border-gray-300 px-4 py-2">One Day</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {ratesData.one_day === 0 ? 
                                                    <>
                                                        <Field type="number" name="oneDay" className="border border-gray-300 rounded p-2 w-full" />
                                                        <ErrorMessage name="oneDay" component="div" className="text-red-500" />
                                                    </> :
                                                    <span className='w-full text-black'>{ratesData.one_day}</span>
                                                }
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                                            <td className="border border-gray-300 px-4 py-2">2</td>
                                            <td className="border border-gray-300 px-4 py-2">One Week</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {ratesData.one_week === 0 ? 
                                                    <>
                                                        <Field type="number" name="oneDay" className="border border-gray-300 rounded p-2 w-full" />
                                                        <ErrorMessage name="oneDay" component="div" className="text-red-500" />
                                                    </> :
                                                    <span className='w-full text-black'>{ratesData.one_week}</span>
                                                }
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                                            <td className="border border-gray-300 px-4 py-2">3</td>
                                            <td className="border border-gray-300 px-4 py-2">One Month</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {ratesData.one_month === 0 ? 
                                                    <>
                                                        <Field type="number" name="oneMonth" className="border border-gray-300 rounded p-2 w-full" />
                                                        <ErrorMessage name="oneMonth" component="div" className="text-red-500" />
                                                    </> :
                                                    <span className='w-full text-black'>{ratesData.one_month}</span>
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className='bg-gray-500 hover:bg-gray-600 text-white items-end rounded-md p-2 px-8 max-md:mr-1 max-md:px-3 max-md:py-1 max-md:text-lg hover:scale-105 duration-300'
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            }
        </div>
    );
};

export default Slots;
