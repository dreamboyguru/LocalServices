import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    date: Yup.date().required('Required'),
});


const Leave = () => {
    const [leaveData, setLeaveData] = useState([]);
    const [loading, setLoading] = useState(false);
    const email = localStorage.getItem('email');
    const url = process.env.REACT_APP_API_URL;
    
    const initialValues = {
        date: '',
    };

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/leave/${email}`);
                console.log(response.data);
                setLeaveData(response.data);
            } catch (err) {
                console.log(err);
                setLeaveData([
                    {date : '01-06-2024', status : '1'},
                    {date : '01-06-2024', status : '2'}, 
                    {date : '01-06-2024', status : '0'},
                    {date : '01-06-2024', status : '0'}
                ])
            } finally {
                setLoading(false);
            }
        } 
        fetchData()
    }, [loading])

    const handleSubmit = async (values, { setSubmitting }) => {
        setLoading(true)
        try {
            const response = await axios.post(`${url}/api/leave`, {values, email});
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            setSubmitting(false);
        }
    };
  return (
    <div className="flex flex-wrap">
        <div className="bg-white rounded-md shadow-lg p-4 px-10 max-md:p-2 w-[40%] max-md:w-full mb-5 max-md:text-sm h-40 max-md:h-auto">
            <h1 className="text-2xl max-md:text-lg font-bold text-center text-gray-800 mb-6 max-md:mb-2">Select Leave Applying Date</h1>
            <div className='flex flex-row'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex items-center justify-center w-full space-x-2">
                            <div className="flex justify-center w-full">
                                <Field
                                    type="date"
                                    name="date"
                                    className="w-full text-2xl max-md:text-sm text-black text-center border border-gray-300 rounded-l-lg p-2 max-md:p-1 focus:outline-none focus:ring-1 focus:ring-gray-100"
                                />
                                <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className='w-1/3'>
                                <button
                                    type="submit"
                                    className='p-3 max-md:p-1 px-4 bg-gray-500 text-2xl max-md:text-lg hover:bg-gray-600 w-full rounded-r-md duration-300'
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        <div className="shadow-lg w-[58%] max-md:w-full mb-5 ml-5 max-md:ml-0 h-auto">
            <table className="min-w-full border-collapse border border-gray-300 shadow-lg max-md:text-sm">
                <thead>
                    <tr className="bg-gray-500 text-white">
                        <th className="border border-gray-300 px-4 py-4 max-md:py-4 w-1/12 max-md:px-1">SL.No</th>
                        <th className="border border-gray-300 px-4 py-4 max-md:py-4 w-3/12 max-md:px-1">Applied Date</th>
                        <th className="border border-gray-300 px-4 py-4 max-md:py-4 w-4/12 max-md:px-1">Status</th>
                    </tr>
                </thead>
                <tbody className="text-center text-black">
                    {leaveData && leaveData.map((item, index) =>
                        <tr className="odd:bg-white even:bg-gray-50" key={item.id}>
                            <td className="border border-gray-300 px-4 py-4">{index+1}</td>
                            <td className="border border-gray-300 px-4 py-4">{item?.date.split('T')[0]}</td>
                            {item.status === 0 ? 
                                <td className="border border-gray-300 px-4 py-4 font-bold text-yellow-600">Processing</td> :
                                item.status === 1 ?
                                    <td className="border border-gray-300 px-4 py-4 font-bold text-green-600">Approved</td> :
                                    <td className="border border-gray-300 px-4 py-4 font-bold text-red-600">Rejected</td>
                            }
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    </div>

  )
}

export default Leave
