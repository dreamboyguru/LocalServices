// src/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className='fixed w-full bg-gray-600 p-4 flex flex-row justify-between item-center shadow-md px-14'> 
            <h1>
                Logo
            </h1>   
            <nav className=''>
                <ul className='flex flex-row space-x-4'>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#contact'>Conatct Us</a></li>
                    <li>item5</li>
                </ul>
            </nav> 
        </header>
    );
}

export default Header;
