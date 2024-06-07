import React, { useEffect, useState } from 'react'
import { RiCloseLine } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

// Define the validation schema using Yup
const ServiceSchema = Yup.object().shape({
    serviceName: Yup.string().required('Service Name is required'),
    serviceFile: Yup.mixed().required('Service File is required'),
  });

const AddServices = () => {
    const url = process.env.REACT_APP_API_URL;
    const [err, setError] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [addServiceBox, setAddServiceBox] = useState(false);
    const [services, setServices] = useState([]);
    const AddServicesToggle = () => {
        setAddServiceBox(!addServiceBox);
    }
    const serviceList = [
        {'img' : 'https://www.html.am/images/html-codes/links/boracay-resort-1000x750.jpg', 'ServiceName' : 'Driver'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Plumber'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Cook'},
        {'img' : 'https://www.html.am/images/html-codes/links/boracay-resort-1000x750.jpg', 'ServiceName' : 'Nurse'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Gardian'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Electrician'}
    ];

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${url}/api/services`);
            setServices(response.data);
          } catch (err) {
            setError(err);
          }
        };
    
        fetchData();
      }, []);
    const showAddAerviceBox = () => {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 backdrop-blur-sm bg-opacity-75">
                <div className="relative bg-white h-auto shadow-md p-5 w-96 -mt-28 items-center justify-center rounded">
                    <RiCloseLine className="absolute top-1 right-1 text-2xl cursor-pointer hover:scale-150" onClick={AddServicesToggle} />
                    
                    <Formik
                    initialValues={{
                        serviceName: '',
                        serviceFile: null,
                    }}
                    validationSchema={ServiceSchema}
                    onSubmit={ async(values, { setSubmitting }) => {
                        const formData = new FormData();
                        formData.append('name', values.serviceName);
                        formData.append('img', values.serviceFile)
                        try{
                            const response = await axios.post(`${url}/api/services`, formData, {
                                Headers : {
                                    'Content-Type' : 'multipart/form-data',
                                },
                            });
                            console.log('service added successfuly', response.data);
                            AddServicesToggle()
                        } catch (err) {
                            console.log('Error adding servicess : ', err);
                            setErrMsg(err.response.data.message);
                            setError(true);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                    >
                    {({ setFieldValue, isSubmitting }) => (
                        <Form>
                        <div className="border-b-2 border-gray-700 -mx-4 -mt-2 mb-2 px-4">
                            <label>Add new Service</label>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="serviceName" className="block text-lg text-gray-700 font-bold">Service Name</label>
                            <Field 
                            type="text" 
                            id="serviceName" 
                            name="serviceName" 
                            className="py-2 max-md:py-1 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            />
                            {err ? 
                                <div className='text-sm text-red-600'>{errMsg}</div> :
                                <ErrorMessage name="serviceName" component="p" className="text-red-600 text-sm" />
                            }
                        </div>

                        <div className="mb-6">
                            <label htmlFor="serviceFile" className="block text-lg font-bold text-gray-700">Service File</label>
                            <input
                            type="file"
                            id="serviceFile"
                            name="serviceFile"
                            className="py-2 max-md:py-1 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm text-lg"
                            onChange={(event) => {
                                setFieldValue("serviceFile", event.currentTarget.files[0]);
                            }}
                            />
                            <ErrorMessage name="serviceFile" component="p" className="text-red-600 text-sm" />
                        </div>

                        <div>
                            <button type="submit" className="p-1 px-4 bg-gray-500 text-white rounded-md w-full hover:scale-105 hover:bg-gray-600" disabled={isSubmitting}>
                            Submit
                            </button>
                        </div>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        )
    }
  return (
    <div className='flex flex-wrap justify-center h-auto text-2xl w-full text-black font-serif' >
      
      <div>
        {!addServiceBox && <button className='bg-gray-600 text-white text-lg p-1 px-5 rounded-md hover:scale-105 hover:bg-gray-700 mb-5'
            onClick={()=>AddServicesToggle()}
        >Add</button>}
      </div>
      <div className='relative' >{addServiceBox && showAddAerviceBox()}</div>
      <div className='flex flex-wrap justify-between w-full'>
            {services && services.map((item) => {
                return(
                    <div className='bg-white p-1 w-48 max-md:w-[49%] max-md:my-1 shadow-md rounded-md h-48' key={item.id}>
                        <div>
                            <img src={`${url}/uploads/Services/${item.img}`} alt={`${item.img} Services image`} className='h-36 w-full'/>
                        </div>
                        <div className='flex mt-2 justify-center'>
                            {item.name}
                        </div>
                    </div>
                )
            })}
      </div>
    </div>
  )
}

export default AddServices
