import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LeavesList = () => {
    const [leave, setLeave] = useState([]);
    const url = process.env.REACT_APP_API_URL;
    
    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/leave`);
                console.log(response.data);
                setLeave(response.data);
            }
            catch (err) {
                console.log(err);
                setLeave([
                    {firstName : 'Jhon deo', date : '01-06-2024', status : 1},
                    {firstName : 'Jhon deo', date : '01-06-2024', status : 2}, 
                    {firstName : 'Jhon deo', date : '01-06-2024', status : 0},
                    {firstName : 'Jhon deo', date : '01-06-2024', status : 0}
                ])
            }
        }
        fetchData();
    }, [])
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
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{item?.firstName}</td>
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{item?.date.split('T')[0]}</td>
                            {item?.status === 0 ? 
                                <td className="border border-gray-300 px-4 max-md:px-1 py-3 font-bold text-yellow-600">Approval</td> :
                                item.status === 1 ?
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
