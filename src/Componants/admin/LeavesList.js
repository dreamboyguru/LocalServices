import React from 'react'

const LeavesList = () => {
    const leave = [
        {name : 'Jhon deo', date : '01-06-2024', status : '1'},
        {name : 'Jhon deo', date : '01-06-2024', status : '2'}, 
        {name : 'Jhon deo', date : '01-06-2024', status : '0'},
        {name : 'Jhon deo', date : '01-06-2024', status : '0'}
    ]
  return (
    <div className='flex justify-center'>
        <div className="shadow-lg w-[58%] max-md:w-full mb-5 ml-5 max-md:ml-0 h-auto">
            <table className="min-w-full border-collapse border border-gray-300 shadow-lg text-sm">
                <thead>
                    <tr className="bg-gray-500 text-white">
                        <th className="border border-gray-300 px-4 py-4 max-md:py-4 w-1/12 max-md:px-1">SL.No</th>
                        <th className="border border-gray-300 px-4 py-4 max-md:py-4 w-4/12  max-md:px-1">Name</th>
                        <th className="border border-gray-300 px-4 py-4 max-md:py-4 w-5/12 max-md:px-1">Applied Date</th>
                        <th className="border border-gray-300 px-4 py-4 max-md:py-4 w-2/12 max-md:px-1">Status</th>
                    </tr>
                </thead>
                <tbody className="text-center text-black">
                    {leave && leave.map((item, index) =>
                        <tr className="odd:bg-white even:bg-gray-50" key={item.id}>
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{index+1}</td>
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{item.name}</td>
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{item.date}</td>
                            {item.status === '0' ? 
                                <td className="border border-gray-300 px-4 max-md:px-1 py-3 font-bold text-yellow-600">Processing</td> :
                                item.status === '1' ?
                                    <td className="border border-gray-300 px-4 max-md:px-1 py-3 font-bold text-green-600">Approved</td> :
                                    <td className="border border-gray-300 px-4 max-md:px-1 py-3 font-bold text-red-600">Rejected</td>
                            }
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LeavesList
