import React, { useState } from 'react'
import { RiArrowGoBackFill } from "react-icons/ri";

const Documents = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Driver', 'Plumber', 'Cook', 'Watchman', 'Electrician'];
    const [role, setRole] = useState(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const dropdown = () => {
        return(
            <div className="absolute w-2/12 max-md:w-4/12 mt-14 max-md:mt-12 bg-white border rounded shadow-lg z-40">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="p-2 max-md:p-1 border-b cursor-pointer hover:bg-gray-100"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        )
    }
    const sumbitRole = () => {
        setRole(selectedOption);
    }
  return (
    <section className='flex w-full h-screen bg-gray-50  justify-center pt-20 pb-72 max-md:pb-96 duration-300 text-sm max-md:text-xs'>
        <div className='bg-white text-black w-5/12 max-md:w-[95%] h-auto min-h-72 p-2 rounded-md shadow-lg'>
            <div className='border-b-2 py-1 text-2xl max-md:text-sm flex flex-row items-center mb-2'>
                <RiArrowGoBackFill 
                    className='size-7 max-md:size-5 hover:scale-110 ml-5 max-md:ml-2 mr-28 max-md:mr-8'
                    onClick={()=>{
                        localStorage.removeItem('type');
                        window.location.reload();
                    }}
                />
                <label className='font-bold flex justify-center'>Submit Your Documents here</label>
            </div>
            <div className='px-10 max-md:px-3 mb-5 max-md:mb-2 border-b-2 pb-2'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col font-mono'>
                        <label className={`mb-2 ${role !== null ? 'max-md:mb-0' : 'max-md:mb-2'}`}>Wellcome Jhone Deo</label>
                        <label className=''>Your Phone no : 9586547854</label>
                    </div>
                    <div className='flex flex-col font-mono w-5/12 text-center'>
                        
                        {role !== null ? <label className='font-semibold'>Apllied Role as {role}</label> :
                            <>
                                <label className='mb-1'>Applying for</label>
                                <div
                                    className="flex justify-between items-center w-full py-2 max-md:py-1 bg-white border rounded cursor-pointer"
                                    onClick={handleToggle}
                                >
                                    <span>{selectedOption ? selectedOption : "Select an option"}</span>
                                    <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} duration-300`}>▼</span>
                                </div>
                                {isOpen && dropdown() }
                                <button 
                                    className='bg-gray-400 hover:bg-gray-500 rounded-b-md text-black font-semibold p-1 mt-1'
                                    onClick={()=>sumbitRole()}
                                >Submit</button>
                            </>
                        }
                    </div>
                </div>
            </div>
            {role !== null && <div>
                <div className='flex flex-row justify-between max-md:justify-start items-center px-10 max-md:px-2 mb-2'>
                    <label className='w-1/6 max-md:w-1/3 font-semibold' >Adhar card : </label>
                    <div className='w-3/4 max-md:w-2/3 flex flex-row items-center justify-between border border-gray-500 rounded-md max-md:ml-3'>
                        <input type='file' className='rounded-l-md pl-1 max-md:pl-0.5'/>
                        <button type='submit' className='w-1/6 max-md:w-5/12 py-2 max-md:py-1 bg-gray-600 text-white hover:bg-gray-500 rounded-r-md'>Upload</button>
                    </div>
                </div>

                <div className='flex flex-row justify-between max-md:justify-start items-center px-10 max-md:px-2 mb-2'>
                    <label className='w-1/6 max-md:w-1/3 font-semibold' >Pan card : </label>
                    <div className='w-3/4 max-md:w-2/3 flex flex-row items-center justify-between border border-gray-500 rounded-md max-md:ml-3'>
                        <input type='file' className='rounded-l-md pl-1 max-md:pl-0.5'/>
                        <button type='submit' className='w-1/6 max-md:w-5/12 py-2 max-md:py-1 bg-gray-600 text-white hover:bg-gray-500 rounded-r-md'>Upload</button>
                    </div>
                </div>

                <div className='flex flex-row justify-between max-md:justify-start items-center px-10 max-md:px-2 mb-2'>
                    <label className='w-1/6 max-md:w-1/3 font-semibold' >{role === 'Driver' ? 'DL Card' : 'ID Card'} : </label>
                    <div className='w-3/4 max-md:w-2/3 flex flex-row items-center justify-between border border-gray-500 rounded-md max-md:ml-3'>
                        <input type='file' className='rounded-l-md pl-1 max-md:pl-0.5'/>
                        <button type='submit' className='w-1/6 max-md:w-5/12 py-2 max-md:py-1 bg-gray-600 text-white hover:bg-gray-500 rounded-r-md'>Upload</button>
                    </div>
                </div>
            </div>}

            {role !== null && 
                <div className='flex justify-center items-center mt-8 max-md:mt-6 text-lg text-yellow-500'>
                    <p>Verifying Your Documents</p>
                </div>
            }
            
        </div>
      
    </section>
  )
}

export default Documents
