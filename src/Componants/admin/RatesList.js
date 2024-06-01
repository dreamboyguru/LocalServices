import React from 'react'

const RatesList = () => {
    const leave = [
        {name : 'Jhon deo 1', contact: '8957456218', rates : {work: 250, day: 600, month: 15000}, date : '01-06-2024', status : '0'},
        {name : 'Jhon deo 2', contact: '8957456218', rates : {work: 250, day: 600, month: 15000}, date : '01-06-2024', status : '1'}, 
        {name : 'Jhon deo 3', contact: '8957456218', rates : {work: 250, day: 600, month: 15000}, date : '01-06-2024', status : '1'},
        {name : 'Jhon deo 4', contact: '8957456218', rates : {work: 250, day: 600, month: 15000}, date : '01-06-2024', status : '0'}
    ]
    console.log(leave)
  return (
    <div className='flex justify-center'>
        <div className="shadow-lg w-[58%] max-md:w-full mb-5 ml-5 max-md:ml-0 h-auto">
            <table className="min-w-full border-collapse shadow-lg text-sm max-md:text-xs">
                <thead>
                    <tr className="bg-gray-500 text-white">
                        <th colSpan='2' className="px-4 py-4 max-md:py-4 w-4/12 max-md:w-5/12 max-md:px-1">Name</th>
                        <th className="px-4 py-4 max-md:py-4 w-3/12 max-md:px-1 max-md:hidden">Applied Date</th>
                        <th className="px-4 py-4 max-md:py-4 w-5/12 max-md:px-1 text-left pl-16 max-md:text-center">Rates</th>
                        <th className="px-4 py-4 max-md:py-4 w-1/12 max-md:px-1">Status</th>
                    </tr>
                </thead>
                <tbody className="text-center text-black">
                    {leave && leave.map((item, index) =>
                        <tr className={`odd:bg-white even:bg-gray-50 ${leave.length-1 === index ? '' : 'border-b-4'} border-gray-300`} key={item.id}>
                            <td className="px-2 max-md:px-2 py-4">{index+1}</td>
                            <td className="px-2 max-md:px-2 py-4 text-left">
                                <div><span className='font-semibold'>{item.name}</span></div>
                                <div><span className='font-semibold'>Conact No : </span> {item.contact}</div>
                            </td>
                            <td className="px-2 max-md:px-2 py-4 max-md:hidden">{item.date}</td>
                            <td className="px-2 max-md:px-2 py-4 text-left">
                                <div><span className='font-semibold'>One Work : </span> {item.rates.work} Rs</div>
                                <div><span className='font-semibold'>One Day : </span> {item.rates.day} Rs</div>
                                <div><span className='font-semibold'>one Month : </span> {item.rates.month} Rs</div>
                            </td>
                            {item.status === '0' ? 
                                <td className="px-2 max-md:px-2 py-4 font-bold text-green-600">Approved</td> :
                                <td className="px-2 max-md:px-2 py-4 font-bold text-red-600">Rejected</td>
                                    
                            }
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RatesList
