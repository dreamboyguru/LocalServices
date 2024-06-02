import React, { useState } from 'react'
import { RiCloseLine } from "react-icons/ri";

const AddServices = () => {
    const [addServiceBox, setAddServiceBox] = useState(false);
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
    const showAddAerviceBox = () => {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 backdrop-blur-sm bg-opacity-75">
                <div className='relative bg-white h-auto shadow-md p-5 w-96 -mt-28 items-center justify-center rounded'>
                    <RiCloseLine className='absolute top-1 right-1 text-2xl cursor-pointer hover:scale-150' onClick={AddServicesToggle} />
                    <form>
                        <div className='border-b-2 border-gray-700 -mx-4 -mt-2 mb-2 px-4'>
                            <label>Add new Service</label>
                        </div>
                        <div className="mb-4">
                        <label htmlFor="service-name" className="block text-lg text-gray-700 font-bold">Service Name</label>
                        <input type="text" id="service-name" className="py-2 max-md:py-1 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                        </div>
                        <div className="mb-6">
                        <label htmlFor="service-file" className="block text-lg font-bold text-gray-700">Service File</label>
                        <input type="file" id="service-file" className="py-2 max-md:py-1 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm text-lg"/>
                        </div>
                        <div>
                        <button type='submit' className='p-1 px-4 bg-gray-500 text-white rounded-md w-full hover:scale-105 hover:bg-gray-600'>Submit</button>
                        </div>
                    </form>
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
            {serviceList && serviceList.map((item, index) => {
                return(
                    <div className='bg-white p-1 w-48 max-md:w-[49%] max-md:my-1 shadow-md rounded-md h-48' key={index}>
                        <div>
                            <img src={item.img} alt={item.img} className='h-36 w-full'/>
                        </div>
                        <div className='flex mt-2 justify-center'>
                            {item.ServiceName}
                        </div>
                    </div>
                )
            })}
      </div>
    </div>
  )
}

export default AddServices
