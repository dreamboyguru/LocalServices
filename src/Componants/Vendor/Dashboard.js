import React from 'react'
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineDownloadDone } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";

const Dashboard = () => { 
  return (
    <div className='min-h-96 text-2xl w-full'>
      <div className="flex flex-wrap items-center justify-between">
        <div className="bg-white w-80 max-sm:w-full h-40 text-orange-600 m-0.5 flex flex-col justify-center items-center rounded-md">
          <h1 className="text-center text-5xl mb-4">10</h1> 
          <h1 className="text-center text-2xl font-bold flex flex-row w-full justify-center items-center"><HiOutlineArrowPathRoundedSquare className='size-14 pr-2 text-orange-600' />Processing...</h1>
        </div>
        <div className="bg-white w-80 max-sm:w-full h-40 text-green-600 m-0.5 flex flex-col justify-center items-center rounded-md">
          <h1 className="text-center  text-5xl mb-4">10</h1> 
          <h1 className="text-center text-2xl font-bold flex flex-row w-full justify-center items-center"><MdOutlineDownloadDone  ineFileDownloadDone className='size-14 pr-2 text-green-600' />Completed</h1>
        </div>
        <div className="bg-white w-80 max-sm:w-full h-40 text-yellow-600 m-0.5 flex flex-col justify-center items-center rounded-md">
          <h1 className="text-center  text-5xl mb-4">10</h1> 
          <h1 className="text-center text-2xl font-bold flex flex-row w-full justify-center items-center"><GoCodeReview className='size-14 pr-2 text-yellow-600' />Reviews</h1>
        </div>
        <div className="bg-white w-80 max-sm:w-full h-40 text-red-600 m-0.5 flex flex-col justify-center items-center rounded-md">
          {/* <h1 className="text-center  text-5xl mb-4">10</h1>  */}
          <h1 className="text-center text-5xl font-bold flex flex-row w-full justify-center items-center">NA</h1>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
