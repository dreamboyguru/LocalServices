// src/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className='bg-gray-600 p-4 flex flex-row justify-between item-center shadow-md'> 
            <h1>
                Logo
            </h1>   
            <nav className=''>
                <ul className='flex flex-row space-x-4'>
                    <li className=''>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item5</li>
                </ul>
            </nav> 
        </header>
    );
}

export default Header;
