import React from 'react'

const AddServices = () => {
    const serviceList = [
        {'img' : 'https://www.html.am/images/html-codes/links/boracay-resort-1000x750.jpg', 'ServiceName' : 'Driver'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Plumber'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Cook'},
        {'img' : 'https://www.html.am/images/html-codes/links/boracay-resort-1000x750.jpg', 'ServiceName' : 'Nurse'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Gardian'},
        {'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg', 'ServiceName' : 'Electrician'}
    ];
  return (
    <div className='flex flex-wrap justify-center h-auto text-2xl w-full text-black font-serif'>
      <form className='bg-white h-auto shadow-md p-5 w-96 items-center justify-center rounded'>
        <div class="mb-4">
            <label for="service-name" class="block text-lg text-gray-700 font-bold">Service Name</label>
            <input type="text" id="service-name" class="py-2 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        </div>
        <div class="mb-6">
            <label for="service-file" class="block text-lg font-bold text-gray-700">Service File</label>
            <input type="file" id="service-file" class="py-2 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm sm:text-sm"/>
        </div>
        <div>
            <button type='submit' className='p-1 px-4 bg-gray-500 text-white rounded-md w-full hover:scale-105 hover:bg-gray-600'>Submit</button>
        </div>
      </form>
      <div className='flex flex-wrap justify-between w-full'>
            {serviceList && serviceList.map((item, index) => {
                return(
                    <div className='bg-white p-1 m-1 w-48 max-md:w-[47%] max-md:my-4 shadow-md rounded-md h-48' key={index}>
                        <div>
                            <img src={item.img} className='h-36 w-full'/>
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
