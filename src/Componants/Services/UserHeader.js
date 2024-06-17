// src/UserHeader.js
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { Link, Route, Routes } from 'react-router-dom';
import ServicePage from './ServicePage';

const UserHeader = () => {
    const [loginBox, setLoginBox] = useState(false);

  
    const loginToggle = (e) => {
        e.stopPropagation(); // Prevent triggering the header's onClick
        setLoginBox(!loginBox);
    }

    const loginToggleShow = () => {
        setLoginBox(false);
    }
    
    const dropdown = () => {
        return (
            <ul className='absolute w-40 bg-gray-700 top-16 right-10 rounded-b-md text-center transition-transform duration-500 ease-out transform origin-top'>
                <hr className='border-gray-900'/>
                <li className='py-3 px-5 hover:bg-gray-800'><Link to='/settings'>Settings</Link></li>
                <hr className='border-gray-900'/>
                <li className='py-3 px-5 hover:bg-gray-800 hover:rounded-b-md'><Link to='logout'>Logout</Link></li>
            </ul>
        );
    }

    return (
        <>
            <header className='fixed w-full bg-gray-600 p-4 flex flex-row justify-between items-center shadow-md px-14 max-md:px-2 z-30 opacity-90'
                onClick={loginToggleShow}
            >
                <h1 className='ml-20 max-md:ml-32 text-2xl max-md:text-lg'>Logo</h1>
                <nav className=''>
                    <ul className='flex flex-row space-x-4'>
                        <li onClick={loginToggle} className='max-md:absolute max-md:top-3 max-md:right-2'>
                            <CgProfile size={32} className='ml-2 hover:scale-110 duration-300'/>
                            {loginBox && dropdown()}
                        </li>
                    </ul>
                </nav>
            </header> 
            <body>
                {/* <UserHome /> */}

                <Routes>
                    <Route path='/' element={<ServicePage />} />
                </Routes>
            </body>
        </>       
        
    );
}

export default UserHeader;
