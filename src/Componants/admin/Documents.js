import React from 'react'
import { CgProfile } from 'react-icons/cg';

const Documents = () => {
    const data = [
        { name: 'John Doe', address: '123 Main St',  Contact: 28, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'Jane Smith', address: '456 Oak St' ,  Contact: 34, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
        { name: 'Sam Johnson', address: '789 Pine St',  Contact: 23, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'John Doe', address: '123 Main St',  Contact: 28, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'Jane Smith', address: '456 Oak St' ,  Contact: 34, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
        { name: 'Sam Johnson', address: '789 Pine St',  Contact: 23, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
      ];
  return (
    <div className="mx-auto">
        <div className="overflow-x-auto rounded-md">
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-500 font-bold">
                    <tr>
                        <th
                            scope="col"
                            className="pl-6 py-4 text-left text-md text-white uppercase tracking-wider"
                        >
                            Sl.No
                        </th>
                        <th
                            scope="col"
                            className="pr-6 py-4 text-left text-md text-white uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 text-left text-md text-white uppercase tracking-wider"
                        >
                            Address
                        </th>
                        
                        <th
                            scope="col"
                            className="px-6 py-4 text-left text-md text-white uppercase tracking-wider"
                        >
                            Documents
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-700 font-semibold">
                    {data.map((item, index) => (
                    <tr key={index}>
                        <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-800">{index+1}</td>
                        <td className="pr-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <CgProfile className='size-20'/>
                            {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-2 border-black">
                            <div className=''>
                                <label>address : {item.address} </label>
                            </div>
                            <div className=''>
                                <label>Contact : {item.Contact}</label>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <img src={item.img} className='w-1/2 h-36'/>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Documents
