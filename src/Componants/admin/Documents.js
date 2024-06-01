import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Documents = () => {
    const [documentBox, setDocumentBox] = useState(false);
    const [imgData, setImgData] = useState('');
    const documentToggle = (img) => {
        setImgData(img);
        setDocumentBox(true);
    }
    const documents = () => {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 backdrop-blur-sm bg-opacity-75">
                <div className='relative bg-white w-[55%] max-md:w-full h-auto shadow-md items-center justify-center -mt-10 max-md:-mt-20 rounded'>
                    <RiCloseLine className='absolute top-0 right-0 text-5xl cursor-pointer hover:scale-110 text-red-800' onClick={()=>setDocumentBox(false)} />
                    <div>
                        <MdKeyboardDoubleArrowLeft className='absolute top-[45%] left-0 text-6xl cursor-pointer hover:scale-110 text-gray-700' onClick={()=>setDocumentBox(false)} />
                        <img src={imgData} className='w-full' />
                        <MdKeyboardDoubleArrowRight className='absolute top-[45%] right-0 text-6xl cursor-pointer hover:scale-110 text-gray-700' onClick={()=>setDocumentBox(false)} />
                    </div>
                </div>
            </div>
        )
    }
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
            {documentBox && documents()}
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
            <tbody className="text-center text-black" >
                {data && data.map((item, index) =>
                    <tr className="odd:bg-white even:bg-gray-50 border-b-4 border-gray-300" key={item.id}>
                        <td className="px-2 max-md:px-1 py-4 max-md:py-1 text-2xl max-md:text-lg flex items-start">{index+1}</td>
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
                            <img 
                                src={item.img} 
                                className='w-60 h-36'
                                onClick={()=>documentToggle(item.img)}
                            />
                        </td>
                        {item.status === '0' ? 
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-green-600 max-md:hidden">Active</td> :
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-red-600 max-md:hidden">blocked</td>
                        }

                        {item.status === '0' ? 
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-green-600 md:hidden">
                                <img src={item.img} className='w-60 h-20' onClick={()=>documentToggle(item.img)}/>
                                Active
                            </td> :
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-red-600 md:hidden">
                                <img src={item.img} className='w-full h-20' onClick={()=>documentToggle(item.img)}/>
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
