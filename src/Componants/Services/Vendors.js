// src/components/Venders.js
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Vendors = () => {

    const data = [
        { name: 'John Doe', address: '123 Main St',  Contact: 28, Reviews : '****' },
        { name: 'Jane Smith', address: '456 Oak St' ,  Contact: 34, Reviews : '****'},
        { name: 'Sam Johnson', address: '789 Pine St',  Contact: 23, Reviews : '****' },
        { name: 'John Doe', address: '123 Main St',  Contact: 28, Reviews : '****' },
        { name: 'Jane Smith', address: '456 Oak St' ,  Contact: 34, Reviews : '****'},
        { name: 'Sam Johnson', address: '789 Pine St',  Contact: 23, Reviews : '****' },
      ];


  return (
    <div className=" mx-auto p-4 pt-20">
        <div className="overflow-x-auto rounded-md">
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-600">
                    <tr>
                    <th
                            scope="col"
                            className="pl-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                            Sl.No
                        </th>
                        <th
                            scope="col"
                            className="pr-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                            Conact
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                            Reviews
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {data.map((item, index) => (
                    <tr key={index}>
                        <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-300">{index+1}</td>
                        <td className="pr-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            <CgProfile className='size-20'/>
                            {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.address}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.Contact}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.Reviews}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Vendors;
