// src/components/Venders.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Footer from '../Footer';

const Vendors = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const { name } = location.state || {};
    // console.log(name); 
    const url = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const response = await axios.get(`${url}/api/vendors/details/${name}`)
                console.log(response.data);
                setData(response.data);
            } catch (err) {
                console.log(err);
                // setData([
                //     { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                //     { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s'},
                //     { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                //     { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                //     { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s'},
                //     { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                //     { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
                //     { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
                //     { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
                //     { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
                // ])
            }
        }
        fetchData()
    }, [name])
    
    return (
        <div className="relative mx-auto p-4 max-md:p-1 max-md:pt-40 pt-32 bg-gray-100 min-h-screen">
            <div className='fixed top-5 left-16 max-md:left-5  z-40 text-gray-50 text-3xl font-bold'>
                <Link to='/'><MdOutlineKeyboardBackspace /></Link>
            </div>
            <div className='fixed top-3 max-md:top-16 left-1/2 -translate-x-1/2 z-40 text-gray-50'>
                <h1 className='text-2xl max-md:text-lg font-bold max-md:text-black'>{name}'s Lists</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
            { data.length > 0 ?
                data && data.map((item, index) => (
                    <div className="w-64 max-md:w-full bg-white rounded-lg shadow-lg flex flex-col justify-between relative mb-16 max-md:mb-10 z-10" key={index}>
                        {item?.today_leave && 
                            <div className='relative'>
                                <span className='absolute top-2 right-1 z-40 text-red-600 text-[10px] font-bold'>Today Leave</span>
                            </div>
                        }
                        <div className="relative h-20">
                            <img className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-200" src={`${url}/uploads/vendors/photo/${item.photo}`} alt={item.name} />
                            {/* <img className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-200" src={`${item.img}`} alt={item.name} /> */}
                        </div>
                        
                        <div className="p-4 text-left -mt-10 text-gray-800 flex-grow">
                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{item.name}</h3>
                            <p className="text-gray-600 text-sm"><span className='font-semibold text-sm'>Phone : </span>{item.phone}</p>
                            <p className="text-gray-600 text-sm"><span className='font-semibold text-sm'>Email : </span>{item.email}</p>
                            <p className="text-gray-600 pl-14 text-sm"><span className='font-semibold -ml-14 text-sm'>address : </span>{item.address}</p>
                        </div>
                        <hr className='border border-gray-100 mt-2' />
                        <div className="flex flex-col text-center text-black px-4 pb-4">
                            <h1 className="font-semibold">Rates</h1>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Daily Rate:</span>
                                <span className="text-gray-600">₹ {item.one_day ? (item.one_day).toFixed(2) : 'NA'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Weekly Rate:</span>
                                <span className="text-gray-600">₹ {item.one_week ? item.one_week.toFixed(2) : 'NA'}</span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span className="text-gray-600">Monthly Rate:</span>
                                <span className="text-gray-600">₹ {item.one_month ? item.one_month.toFixed(2) : "NA"}</span>
                            </div>
                        </div>
                    </div>
                )) :
                <p className='flex justify-center items-center text-2xl  font-bold text-gray-400 h-[545px]'>No Services Found...</p>
            }
            </div>
            <footer className='-m-4 mt-44'><Footer className=''/></footer>
        </div>
  );
};

export default Vendors;
