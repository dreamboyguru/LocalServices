import React, { useState, useEffect } from 'react';
import img from '../../Images/water.png';
import bg1 from '../../Images/bg1.jpg';
import listCheck from '../../Images/list-check.png';

const ImageSlider = () => {
    const blur = localStorage.getItem('blur');    
    return (
        <div className={`w-full z-20 ${blur === 'true' ? 'blur-sm' : 'blur-none'}`}>
            <div className='relative'>
                <img src={img} alt='ji' className="w-full h-[657px] max-md:h-[400px]" />
                <div className='absolute inset-28 max-md:inset-0 text-black w-1/3 max-md:w-full max-md:mt-20'>
                    <h2 className="text-4xl max-md:text-xl max-md:ml-5 font-bold mb-2 max-md:mb-0 max-md:mt-2 text-blue-400 font-mono">Local Services Portal</h2>
                    <div className="flex flex-wrap list-disc pl-5 max-md:pl-1 px-1 max-md:px-1 justify-between max-md:justify-start">
                        
                        <div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Plumbers</div>
                        </div><div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Carpenters </div>
                        </div>
                        <div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Electricians</div>
                        </div>
                        <div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Plumbers </div>
                        </div><div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Plumbers </div>
                        </div>
                        <div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Plumbers </div>
                        </div>
                        <div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Plumbers </div>
                        </div><div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Plumbers </div>
                        </div>
                        <div className='w-1/3 max-md:w-5/12 flex flex-row items-center p-1 text-lg max-md:text-xs max-md:pl-5'>
                            <div className=''>
                                <img src={listCheck} className='size-4'/>
                            </div>
                            <div className='pl-5'>Plumbers </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
            <div className='absolute block top-[70%] max-md:top-[50%] opacity-40 -mb-20 md:hidden'>
                <img src={bg1} alt='ji' className="w-full h-[550px] max-md:h-[300px]" />
                <div className='absolute inset-28  text-black'></div>
            </div>       

            
        </div>
    );
};

export default ImageSlider;
