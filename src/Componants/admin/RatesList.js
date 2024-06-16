import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RatesList = () => {
    const [rates, setRates] = useState([]);
    const [loding, setLoding] = useState(false);
    const url = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/rates`);
                console.log(response.data);
                setRates(response.data);
            }
            catch (err) {
                console.log(err);
                setRates([
                    {firstName:'Jhon deo 1', phone:'8957456218', one_day:250, one_week:600, one_month:15000, date:'01-06-2024', status:0},
                    {firstName:'Jhon deo 2', phone:'8957456218', one_day:250, one_week:600, one_month:15000, date:'01-06-2024', status:1}, 
                    {firstName:'Jhon deo 3', phone:'8957456218', one_day:250, one_week:600, one_month:15000, date:'01-06-2024', status:1},
                    {firstName:'Jhon deo 4', phone:'8957456218', one_day:250, one_week:600, one_month:15000, date:'01-06-2024', status:0}
                ])
            } finally {
                setLoding(false)
            }
        } 
        fetchData()
    },[loding])

    const rateStatusClick = async (email, status) => {
        setLoding(true);
        status = status === 0 ? 1 : 0;
        try {
            const response = await axios.put(`${url}/api/rates/status/${email}?status=${status}`);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    
    // console.log(leave)
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
                    {rates && rates.map((item, index) =>
                        <tr className={`odd:bg-white even:bg-gray-50 ${rates.length-1 === index ? '' : 'border-b-4'} border-gray-300`} key={item.id}>
                            <td className="px-2 max-md:px-2 py-4">{index+1}</td>
                            <td className="px-2 max-md:px-2 py-4 text-left">
                                <div><span className='font-semibold'>{item.firstName}</span></div>
                                <div><span className='font-semibold'>Conact No : </span> {item.phone}</div>
                            </td>
                            <td className="px-2 max-md:px-2 py-4 max-md:hidden">{item?.date.split('T')[0]}</td>
                            <td className="px-2 max-md:px-2 py-4 text-left">
                                <div><span className='font-semibold'>One Work : </span> {item.one_day} Rs</div>
                                <div><span className='font-semibold'>One Day : </span> {item.one_week} Rs</div>
                                <div><span className='font-semibold'>one Month : </span> {item.one_month} Rs</div>
                            </td>
                            {item.status === 1 ? 
                                <td className="px-2 max-md:px-2 py-4 font-bold text-green-600">
                                    <span 
                                        className='hover:cursor-pointer' 
                                        onClick={()=>rateStatusClick(item.email, item.status)}
                                    >Verified</span>
                                </td> :
                                <td className="px-2 max-md:px-2 py-4 font-bold text-yellow-600">
                                    <span 
                                        className='hover:cursor-pointer' 
                                        onClick={()=>rateStatusClick(item.email, item.status)}
                                    >Verify</span>
                                </td>
                                    
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
