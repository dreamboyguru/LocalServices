import React from 'react'
import { CgProfile } from 'react-icons/cg';

const Documents = () => {
    const data = [
        { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512', Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512',  Contact: 34, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
        { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512',  Contact: 23, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512',  Contact: 28, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
        { name: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512',  Contact: 34, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
        { name: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '8596547512',  Contact: 23, Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
      ];
  return (
    <div className="mx-32 max-md:mx-1">
        <div className="rounded-md">
            <table className="min-w-full border-collapse shadow-lg max-md:text-xs">
            <thead>
                <tr className="bg-gray-500 text-white">
                    <th colSpan="2" className="px-2 py-4 max-md:py-3 w-1/4 max-md:px-1">Name</th>
                    <th className="px-2 py-4 max-md:py-3 w-1/3 max-md:w-1/4 max-md:px-1">Details</th>
                    <th colSpan="2" className="px-2 py-4 max-md:py-3 w-1/3 max-md:px-1 md:hidden">Documents</th>
                    <th className="px-2 py-4 max-md:py-3 w-1/4 max-md:px-1 max-md:hidden">Documents</th>
                    <th className="px-2 py-4 max-md:py-3 w-1/6 max-md:px-1 max-md:hidden">Status</th>
                </tr>
            </thead>
            <tbody className="text-center text-black">
                {data && data.map((item, index) =>
                    <tr className="odd:bg-white even:bg-gray-50" key={item.id}>
                        <td className="px-2 max-md:px-1 py-4 max-md:py-1 text-2xl max-md:text-lg">{index+1}</td>
                        <td className="px-10 max-md:px-1 py-4 max-md:py-1">
                            {/* <CgProfile className='w-full text-red-500 text-center' /> */}
                            <img src={item.img} className='flex justify-center item-center size-36 max-md:h-20 max-md:size-28 rounded-full border-2 border-black'/>
                            {item.name}
                        </td>
                        <td className="px-4 max-md:px-1 py-4 max-md:py-1 text-left">
                            <div>Address : {item.address}</div>
                            <div>Contact : {item.contact}</div>
                        </td>
                        
                        <td className="px-4 max-md:px-1 py-4 max-md:py-1 max-md:hidden">
                            <img src={item.img} className='w-60 h-36'/>
                        </td>
                        {item.status === '0' ? 
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-green-600 max-md:hidden">Active</td> :
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-red-600 max-md:hidden">blocked</td>
                        }

                        {item.status === '0' ? 
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-green-600 md:hidden">
                                <img src={item.img} className='w-60 h-20'/>
                                Active
                            </td> :
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-red-600 md:hidden">
                                <img src={item.img} className='w-full h-20'/>
                                blocked
                            </td>
                        }
                    </tr>
                )}
                
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Documents
