// src/Header.js
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import Tabs from './Vendor/Tabs';
import UserHeader from './Services/UserHeader';
import AdminTabs from './admin/AdminTabs';
import Login from './Login';
import Register from './Register';
import ImageSlider from './home/ImageSlider';

const Header = () => {
    const [loginBox, setLoginBox] = useState(false);
    const [login, setLogin] = useState(false);
    const [loginType, setloginType] = useState('');
    const [register, setRegister] = useState(false);
    const [regType, setRegType] = useState('');

    const [selectedComponent, setSelectedComponent] = useState(null);
    const type = localStorage.getItem('type') || null;

    const handleClick = (component) => {
        switch (component) {
        case 'Component1':
            localStorage.setItem('type', 'Component1');
            setSelectedComponent(<UserHeader />);
            break;
        case 'Component2':
            localStorage.setItem('type', 'Component2');
            setSelectedComponent(<Tabs />);
            break;
        case 'Component3':
            localStorage.setItem('type', 'Component3');
            setSelectedComponent(<AdminTabs />);
            break;
        default:
            setSelectedComponent(null);
        }
    };
    

    const loginToggle = (e) => {
        e.stopPropagation(); // Prevent triggering the header's onClick
        setLoginBox(!loginBox);
    }

    const loginToggleShow = () => {
        setLoginBox(false);
    }

    const RegistrationShow = () => {
        setRegister(false)
    }

    const loginShow = () => {
        setLogin(false);
    }

    const userLoginShow = () => {
        setRegType('User');
        setRegister(false);
        setLogin(true)
    }

    const vendorLoginShow = () => {
        setRegType('Vendor');
        setRegister(false);
        setLogin(true)
    }

    const userRegShow = () => {
        setRegType('User');
        setLogin(false);
        setRegister(true);
    }
    const VendorRegShow = () => {
        setRegType('Vendor');
        setLogin(false);
        setRegister(true);
    }

    const dropdown = () => {
        return (
            <ul className='absolute w-40 bg-gray-700 top-16 right-10 rounded-b-md text-center transition-transform duration-500 ease-out transform origin-top bg-opacity-80'>
                <li onClick={()=>{
                        setloginType('User');
                        setLogin(true);
                    }} 
                    className='py-2 hover:bg-gray-600 border-t border-gray-800'>
                User</li>
                <li onClick={()=>{
                        setloginType('Vendor');
                        setLogin(true);
                    }} 
                    className='py-2 hover:bg-gray-600 border-t border-gray-800'>
                Vendor</li>
                <li onClick={()=>{
                        setloginType('Admin');
                        setLogin(true)
                    }} 
                    className='py-2 hover:bg-gray-600 border-t border-gray-800'>
                Admin</li>
            </ul>
        );
    }
    

    return (    
        <>
            {login && <Login 
                loginType={loginType} 
                loginShow={loginShow} 
                userRegShow={userRegShow} 
                VendorRegShow={VendorRegShow} /> 
            }
            {/* {VenderRegistrationBox && <VendorsReg VenderRegistrationShow={VenderRegistrationShow}/> } */}
            {register && <Register 
                regType={regType} 
                RegistrationShow={RegistrationShow} 
                userLoginShow={userLoginShow} 
                vendorLoginShow={vendorLoginShow}/>
            }
            {selectedComponent === null ? 
                <div>
                    <header className='fixed w-full bg-gray-700 p-4 flex flex-row justify-between items-center shadow-md px-14 z-10 bg-opacity-80 max-md:hidden'
                        onClick={loginToggleShow}
                    >{type !== null ? handleClick(type) : null}
                        <h1 className='text-2xl'>Logo</h1>
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
                    <header className='fixed w-full bg-gray-700 p-4 flex flex-row justify-between items-center shadow-md z-10 bg-opacity-80 md:hidden text-sm'
                        onClick={loginToggleShow}
                    >{type !== null ? handleClick(type) : null}
                        <h1 className='text-xl'>Logo</h1>
                        <nav>
                            <ul className='flex flex-row space-x-4 items-center'>
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
                        <ImageSlider />
                    </body>
                </div> :
                selectedComponent
            }
        </>
            
    );
}

export default Header;
