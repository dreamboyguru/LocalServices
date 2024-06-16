// src/components/Venders.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';

const Vendors = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const { name } = location.state || {};
    const url = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const response = await axios.get(`${url}/api/vendors/details/${name}`)
                // console.log(response.data);
                setData(response.data);
            } catch (err) {
                console.log(err);
                setData([
                    { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                    { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s'},
                    { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                    { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                    { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s'},
                    { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTwcJ9tqAmoGv-S_oRVKNPViJUAk6louIlQ&s' },
                    { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
                    { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
                    { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
                    { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', one_day: 250, one_week: 600, one_month: 15000, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
                ])
            }
        }
        fetchData()
    }, [name])
    
  return (
    <div className="relative mx-auto p-4 max-md:p-1 max-md:pt-36 pt-32 bg-gray-100 min-h-screen">
        <div className='fixed top-3 left-1/2 -translate-x-1/2 z-40 text-gray-50 text-2xl font-bold'>
            <h1>{name}'s Lists</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
            {data && data.map((item, index) => (
            <div className="w-64 max-md:w-full bg-white rounded-lg shadow-lg relative mb-16 max-md:mb-10 z-10" key={index}>
                <div className="relative h-20">
                    {/* <img className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-200" src={`${url}/uploads/vendors/photo/${item.img}`} alt={item.name} /> */}
                    <img className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-200" src={`${item.img}`} alt={item.name} />
                </div>
                <div className="p-4 text-left -mt-10 text-gray-800 -mb-5">
                    <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm"><span className='font-semibold text-sm'>Phone : </span>{item.contact}</p>
                    <p className="text-gray-600 text-sm"><span className='font-semibold text-sm'>Email : </span>email@gmail.commmmm</p>
                    <p className="text-gray-600 pl-14 text-sm"><span className='font-semibold -ml-14 text-sm'>address : </span>{item.address}</p>
                
                </div>
                <hr className='border border-gray-100 mt-2' />
                <div className="flex flex-col text-center text-black px-4">
                    <h1 className="font-semibold">Rates</h1>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Daily Rate:</span>
                        <span className="text-gray-600">₹ {item.one_day.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Weekly Rate:</span>
                        <span className="text-gray-600">₹ {item.one_week.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span className="text-gray-600">Monthly Rate:</span>
                        <span className="text-gray-600">₹ {item.one_month.toFixed(2)}</span>
                    </div>
                </div>

            </div>
            ))}
        </div>
    </div>
  );
};

export default Vendors;
