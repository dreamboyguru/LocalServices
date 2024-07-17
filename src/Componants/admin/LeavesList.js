import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LeavesList = () => {
    const [leave, setLeave] = useState([]);
    const [load, setLoad] = useState(false);
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
        setLoad(false);
    }, [load])
    const handleLeaveStatus = (id) => {
        setLoad(true)
        // console.log(id);
        let {leaves_id, leave_status} = id;
        if(leave_status === 0) {
            leave_status = 1;
        } else if (leave_status === 1) {
            leave_status = 2
        } else if (leave_status === 2) {
            leave_status = 0;
        }
        axios.put(`${url}/api/leave/status/${leaves_id}`, {status : leave_status})
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }
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
                        <tr className="odd:bg-white even:bg-gray-50" key={index}>
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{index+1}</td>
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{item?.firstName}</td>
                            <td className="border border-gray-300 px-4 max-md:px-1 py-3">{item?.date.split('T')[0]}</td>
                            {item?.leave_status === 0 ? 
                                <td 
                                    onClick={()=>handleLeaveStatus(item)}
                                    className="border border-gray-300 px-4 max-md:px-1 py-3 font-bold text-yellow-600">Approval</td> :
                                item.leave_status === 1 ?
                                    <td 
                                        onClick={()=>handleLeaveStatus(item)}
                                        className="border border-gray-300 px-4 max-md:px-1 py-3 font-bold text-green-600 cursor-pointer">Approved</td> :
                                    <td 
                                        onClick={()=>handleLeaveStatus(item)}
                                        className="border border-gray-300 px-4 max-md:px-1 py-3 font-bold text-red-600 cursor-pointer">Rejected</td>
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
