import React, { useEffect, useState } from 'react'
import { MdOutlineDownloadDone } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import UsersList from './UsersList';
import VendorsList from './VendorsList';
import axios from 'axios';

const Dashboard = () => { 
  const [count, setCount] = useState('')
  const url = process.env.REACT_APP_API_URL;
  useEffect(()=>{
    const fetchData = async() => {
      try {
        const response = await axios.get(`${url}/api/admin/dashbord`);
        // console.log(response.data);
        setCount(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])
  return (
    <div className='min-h-96 text-2xl w-full'>
      <div className="flex flex-wrap items-center justify-center mb-5">
        <div className="bg-white w-[24%] max-md:w-[48.5%]  h-40 max-md:h-28 text-orange-600 m-0.5 mx-10 flex flex-col justify-center items-center rounded-md">
            <h1 className="text-center text-5xl mb-2">{count.user_count}</h1> 
            <h1 className="text-center text-2xl max-sm:text-lg font-bold flex flex-row w-full justify-center items-center">
                <FiUsers className='size-12 max-sm:size-10 pr-2 text-orange-600' />
                Users
            </h1>
        </div>
        <div className="bg-white w-[24%] max-md:w-[48.5%]  h-40 max-md:h-28 text-green-600 m-0.5 mx-10 flex flex-col justify-center items-center rounded-md">
            <h1 className="text-center  text-5xl mb-2">{count.vendor_count}</h1> 
            <h1 className="text-center text-2xl max-sm:text-lg font-bold flex flex-row w-full justify-center items-center">
                <GrUserWorker  ineFileDownloadDone className='size-12 max-sm:size-10 pr-2 text-green-600' />
                Vendors
            </h1>
        </div>
        {/* <div className="bg-white w-[24%] max-md:w-[48.5%]  h-40 max-md:h-28 text-yellow-600 m-0.5 flex flex-col justify-center items-center rounded-md">
            <h1 className="text-center  text-5xl mb-2">10</h1> 
            <h1 className="text-center text-2xl max-sm:text-lg font-bold flex flex-row w-full justify-center items-center">
                <GoCodeReview className='size-14 max-sm:size-10 pr-2 text-yellow-600' />
                Reviews
            </h1>
        </div>
        <div className="bg-white w-[24%] max-md:w-[48.5%]  h-40 max-md:h-28 text-blue-600 m-0.5 flex flex-col justify-center items-center rounded-md">
            <h1 className="text-center  text-5xl mb-2">10</h1> 
            <h1 className="text-center text-2xl max-sm:text-lg font-bold flex flex-row w-full justify-center items-center">
                <MdOutlineDownloadDone className='size-14 max-sm:size-10 pr-2 text-blue-600' />
                Booked
            </h1>
        </div> */}
      </div>
      <div className="flex flex-wrap justify-between text-sm">
        <div className="w-[49.5%] max-md:w-full mb-5 max-md:ml-0 h-auto">
          <div className=''>
              <label className='flex text-black text-2xl justify-center font-extrabold'>Users List</label>
          </div>
          <UsersList className='m-5'/>
        </div>
        <div className="w-[49.5%] max-md:w-full mb-5 max-md:ml-0 h-auto">
          <div className=''>
              <label className='flex text-black text-2xl justify-center font-extrabold'>Vendors List</label>
          </div>
          <VendorsList className='m-5'/>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
