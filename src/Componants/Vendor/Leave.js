import React from 'react'

const Leave = () => {
    const leave = [
        {date : '01-06-2024', status : '1'},
        {date : '01-06-2024', status : '2'}, 
        {date : '01-06-2024', status : '0'},
        {date : '01-06-2024', status : '0'}
    ]
  return (
    <div className="flex flex-wrap">
        <div className="bg-white rounded-md shadow-lg p-4 px-10 max-md:p-2 w-[40%] max-md:w-full mb-5 max-md:text-sm h-40 max-md:h-auto">
            <h1 className="text-2xl max-md:text-lg font-bold text-center text-gray-800 mb-6 max-md:mb-2">Select Leave Applying Date</h1>
            <div className='flex flex-row'>
                <div className="flex justify-center w-full">
                    <input type="date" className="w-full text-2xl max-md:text-sm text-black text-center border border-gray-300 rounded-l-lg p-2 max-md:p-1 focus:outline-none focus:ring-1 focus:ring-gray-100" />
                </div>
                <div className='w-1/3'>
                    <button type='submit' className='p-3 max-md:p-1 px-4 bg-gray-500 text-2xl max-md:text-lg hover:bg-gray-600 w-full rounded-r-md duration-300'>Submit</button>
                </div>
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
                    {leave && leave.map((item, index) =>
                        <tr className="odd:bg-white even:bg-gray-50" key={item.id}>
                            <td className="border border-gray-300 px-4 py-4">{index+1}</td>
                            <td className="border border-gray-300 px-4 py-4">{item.date}</td>
                            {item.status === '0' ? 
                                <td className="border border-gray-300 px-4 py-4 font-bold text-yellow-600">Processing</td> :
                                item.status === '1' ?
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
