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
        <div className="bg-white rounded-md shadow-lg p-8 w-[40%] max-md:w-full mb-5 max-md:text-sm h-60">
            <h1 className="text-2xl max-md:text-lg font-bold text-center text-gray-800 mb-6">Select Leave Applying Date</h1>
            <div className="flex justify-center">
            <input type="date" className="text-2xl text-black text-center border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500" />
            </div>
            <div className='w-full'>
                <button type='submit' className='p-3 px-4 mt-5 bg-gray-500 text-2xl max-md:text-lg hover:bg-gray-600 w-full rounded-md'>Submit</button>
            </div>
        </div>
        <div className="shadow-lg w-[58%] max-md:w-full mb-5 ml-5 max-md:ml-0 h-auto">
            <table className="min-w-full border-collapse border border-gray-300 shadow-lg max-md:text-sm">
                <thead>
                    <tr className="bg-gray-400 text-gray-700">
                        <th className="border border-gray-300 px-4 py-2 max-md:py-4 w-1/12 max-md:px-1">SL.No</th>
                        <th className="border border-gray-300 px-4 py-2 max-md:py-4 w-3/12 max-md:px-1">Applied Date</th>
                        <th className="border border-gray-300 px-4 py-2 max-md:py-4 w-4/12 max-md:px-1">Status</th>
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
