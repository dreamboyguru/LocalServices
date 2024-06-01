// src/components/Venders.js
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Vendors = () => {

    // const data = [
    //     { name: 'John Doe', address: '123 Main St',  Contact: 28, Reviews : '****' },
    //     { name: 'Jane Smith', address: '456 Oak St' ,  Contact: 34, Reviews : '****'},
    //     { name: 'Sam Johnson', address: '789 Pine St',  Contact: 23, Reviews : '****' },
    //     { name: 'John Doe', address: '123 Main St',  Contact: 28, Reviews : '****' },
    //     { name: 'Jane Smith', address: '456 Oak St' ,  Contact: 34, Reviews : '****'},
    //     { name: 'Sam Johnson', address: '789 Pine St',  Contact: 23, Reviews : '****' },
    //   ];

    const data = [
        { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', rates : {work: 250, day: 600, month: 15000}, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', rates : {work: 250, day: 600, month: 15000}, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
        { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', rates : {work: 250, day: 600, month: 15000}, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', rates : {work: 250, day: 600, month: 15000}, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', rates : {work: 250, day: 600, month: 15000}, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
        { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', rates : {work: 250, day: 600, month: 15000}, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
      ];


  return (
    <div className="mx-auto p-4 max-md:p-1 max-md:pt-24 pt-20 bg-gray-400">
        <div className="flex justify-center overflow-x-auto rounded-md">
            <table className="w-8/12 max-md:w-full border-collapse shadow-lg max-md:text-xs">
                <thead>
                    <tr className="bg-gray-500 text-white">
                        <th colSpan="2" className="px-2 py-4 max-md:py-3 w-1/4 max-md:px-1">Name</th>
                        <th className="px-2 py-4 max-md:py-3 w-1/3 max-md:w-1/4 max-md:px-1">Details</th>
                        <th className="px-2 py-4 max-md:py-3 w-1/3 max-md:w-1/4 max-md:px-1">Rates</th>
                    </tr>
                </thead>
                <tbody className="text-center text-black" >
                    {data && data.map((item, index) =>
                        <tr className={`odd:bg-white even:bg-gray-50 ${data.length-1 === index ? '' : 'border-b-4'} border-gray-400`} key={item.id}>
                            <td className="px-5 max-md:px-1 py-4 max-md:py-1 text-2xl max-md:text-lg flex items-start">{index+1}</td>
                            <td className="px-10 max-md:px-1 py-4 max-md:py-1">
                                {/* <CgProfile className='w-full text-red-500 text-center' /> */}
                                <img src={item.img} className='flex justify-center item-center size-36 max-md:h-24 max-md:size-28 rounded-full border-2 border-black'/>
                            </td>
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 text-left">
                                <div><span className='font-semibold'>Name :</span> {item.name}</div>
                                <div><span className='font-semibold'>Address : </span> {item.address}</div>
                                <div><span className='font-semibold'>Contact : </span> {item.contact}</div>
                            </td>
                            
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 text-left">
                                <div className='font-semibold'>
                                    <div>{item.rates.work} Rs / 1 Work</div>
                                    <div>{item.rates.day} Rs / 1 Day</div>
                                    <div>{item.rates.month} / 1 Months</div>
                                </div>
                                <div>
                                    <label className='text-gray-300'>This is only working chages. Any material and other expensis extra charges Apply. </label>
                                </div>
                            </td>
                            
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Vendors;
