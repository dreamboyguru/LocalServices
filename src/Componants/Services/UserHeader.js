// src/UserHeader.js
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { Route, Routes } from 'react-router-dom';
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
            <ul className='absolute w-40 bg-gray-700 top-16 right-10 rounded-md text-center transition-transform duration-500 ease-out transform origin-top'>
                {/* <li onClick={()=>handleClick('Component1')} className='py-2 hover:bg-gray-600'>User</li>
                <li onClick={()=>handleClick('Component2')} className='py-2 hover:bg-gray-600'>Vendor</li>
                <li onClick={()=>handleClick('Component3')} className='py-2 hover:bg-gray-600'>Admin</li> */}
            </ul>
        );
    }

    return (
        <>
            <header className='fixed w-full bg-gray-600 p-4 flex flex-row justify-between items-center shadow-md px-14'
                onClick={loginToggleShow}
            >
                <h1>Logo</h1>
                <nav>
                    <ul className='flex flex-row space-x-4'>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                        <li onClick={loginToggle}>
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