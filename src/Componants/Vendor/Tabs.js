import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { TfiDashboard } from "react-icons/tfi";
import { GiThreeLeaves, GiSloth  } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";

const Tabs = () => {
    const [loginBox, setLoginBox] = useState(false);
    const [menu, setMenu] = useState(false);

    const loginToggle = (e) => {
        e.stopPropagation(); // Prevent triggering the header's onClick
        setLoginBox(!loginBox);
    }

    const loginToggleShow = () => {
        setLoginBox(false);
    }

    const menuToggle = () => {
        setMenu(!menu);
    }
    const dropdown = () => {
        return (
            <ul className='absolute w-40 bg-gray-800 top-12 -right-10 rounded-b-md text-white shadow-md transition-transform duration-300 transform origin-top'>
                <hr className='border-gray-700'/>
                <li className='py-3 px-5 hover:bg-gray-700'><Link to='/settings'>Settings</Link></li>
                <hr className='border-gray-700'/>
                <li className='py-3 px-5 hover:bg-gray-700 hover:rounded-b-md'><Link to='/logout'>Logout</Link></li>
            </ul>
        );
    }

    return (
        <header onClick={loginToggleShow}>
            <div className='fixed w-full bg-gray-800 p-4 flex justify-between items-center shadow-md px-6 md:px-14 text-white'>
                <nav className='flex flex-row'>
                    <h1 className='text-2xl font-bold'>Logo</h1>
                    {menu ? 
                        <RiMenuFoldFill
                            className='ml-14 mt-2 text-2xl' 
                            onClick={menuToggle}    
                        /> :    
                        <RiMenuFold2Fill
                            className='ml-14 mt-2 text-2xl' 
                            onClick={menuToggle}    
                        />
                    }
                </nav>
                <nav>
                    <ul className='flex space-x-4 items-center'>
                        <li className='relative' onClick={loginToggle}>
                            <CgProfile size={32} className='ml-2 hover:scale-110 duration-300'/>
                            {loginBox && dropdown()}
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='fixed bg-gray-800  flex flex-col justify-between items-center shadow-md text-white h-screen top-16'>
                {menu ? (<nav className='w-52 duration-500'>
                    <ul className='flex flex-col text-center'>
                        <hr className='border-gray-700' />
                        <Link to='/vendor' className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <a href='#slots' className='text-right'>Dashboard</a>
                            <TfiDashboard className='text-3xl pl-2'/>
                        </Link> <hr className='border-gray-700' />
                        <li className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <a href='#slots' className='text-right'>Slots</a>
                            <GiSloth className='text-3xl pl-2'/>
                        </li> <hr className='border-gray-700' />
                        <li className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <a href='#slots' className='text-right'>Leave</a>
                            <GiThreeLeaves className='text-3xl pl-2'/>
                        </li> <hr className='border-gray-700' />
                        <li className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <a href='#slots' className='text-right'>Review</a>
                            <MdReviews className='text-3xl pl-2'/>
                        </li> <hr className='border-gray-700' />
                    </ul>
                </nav>) : (<nav className='w-16 max-md:w-0 max-md:collapse duration-300'>
                    <ul className='flex flex-col text-center'>
                        <hr className='border-gray-700' />
                        <li className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <TfiDashboard className='text-3xl pl-2'/>
                        </li> <hr className='border-gray-700' />
                        <li className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <GiSloth className='text-3xl pl-2'/>
                        </li> <hr className='border-gray-700' />
                        <li className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <GiThreeLeaves className='text-3xl pl-2'/>
                        </li> <hr className='border-gray-700' />
                        <li className='flex flex-row py-5 items-center justify-center hover:bg-gray-700 text-center'>
                            <MdReviews className='text-3xl pl-2'/>
                        </li> <hr className='border-gray-700' />

                    </ul>
                </nav>)}
                
            </div>
        </header>
    );
};

export default Tabs;