import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, isEmptyArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
    oneDay: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    oneWeek: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    oneMonth: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
});

const Slots = () => {
    const [ratesData, setRatesData] = useState([]);
    const [loading, setLoding] = useState(false);
    const email = localStorage.getItem('email')
    const url = process.env.REACT_APP_API_URL;
    
    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/rates/${email}`);
                console.log(response.data);
                setRatesData(response.data);
            }
            catch (err) {
                console.log(err);
            } finally {
                setLoding(false)
            }
        } 
        fetchData()
    },[loading])

    const initialValues = {
        oneDay: '',
        oneWeek:'',
        oneMonth: '',
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setLoding(true)
        try {
            const response = await axios.put(`${url}/api/rates`, {values, email});
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='flex justify-center'>
            <div className='min-h-96 text-2xl w-[50%] mt-20 max-md:w-full text-black overflow-x-auto'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            {(isEmptyArray(ratesData)) || (ratesData === null) || (ratesData.one_day === 0) || (ratesData?.one_week === 0) || (ratesData?.one_month === 0)  ? 
                                <>
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
                                                    <Field type="number" name="oneDay" className="border border-gray-300 rounded p-2 w-full" />
                                                    <ErrorMessage name="oneDay" component="div" className="text-red-500" />
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                                                <td className="border border-gray-300 px-4 py-2">2</td>
                                                <td className="border border-gray-300 px-4 py-2">One Week</td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    <Field type="number" name="oneWeek" className="border border-gray-300 rounded p-2 w-full" />
                                                    <ErrorMessage name="oneWeek" component="div" className="text-red-500" />
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                                                <td className="border border-gray-300 px-4 py-2">3</td>
                                                <td className="border border-gray-300 px-4 py-2">One Month</td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    <Field type="number" name="oneMonth" className="border border-gray-300 rounded p-2 w-full" />
                                                    <ErrorMessage name="oneMonth" component="div" className="text-red-500" />
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
                                 </> :

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
                                                {ratesData?.one_day}
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                                            <td className="border border-gray-300 px-4 py-2">2</td>
                                            <td className="border border-gray-300 px-4 py-2">One Week</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {ratesData?.one_week}
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                                            <td className="border border-gray-300 px-4 py-2">3</td>
                                            <td className="border border-gray-300 px-4 py-2">One Month</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {ratesData?.one_month}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Slots;
