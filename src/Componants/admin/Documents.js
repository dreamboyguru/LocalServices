import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from 'axios';

const Documents = () => {
    const [update, setupdate] = useState(0);
    const [documentBox, setDocumentBox] = useState(false);
    const [imgData, setImgData] = useState('');
    const [id, setId] = useState(0);
    const [docData, setDocData] = useState([]);
    const url = process.env.REACT_APP_API_URL;
    const documentToggle = (img) => {
        const arr = [];
        arr.push(img.adhar, img.pan, img.other);
        // setImgData(arr);
        setImgData(img.img);
        setDocumentBox(true);
    }
    const decID = (id) => {
        if ( id <= 0 ) {
            setId(2); 
            return
        }
        setId(--id)
    }
    const incID = (id) => {
        if (id > 1) {
            setId(0);
            return;
        }
        setId(++id)
    }

    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/doc/data`);
                // console.log(response.data);
                setDocData(response.data)
            } catch (err) {
                console.log(err);
                setDocData([
{ firstName: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', email : 'jhon@gmail.com', Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
{ firstName: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', email : 'jhon@gmail.com', Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
{ firstName: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', email : 'jhon@gmail.com', Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
{ firstName: 'John Doe', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', email : 'jhon@gmail.com', Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
{ firstName: 'Jane Smith', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', email : 'jhon@gmail.com', Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg'},
{ firstName: 'Sam Johnson', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '8596547512', email : 'jhon@gmail.com', Reviews : '****', 'img' : 'https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg' },
                ])
            }
        }
        fetchData()
        setupdate(0)
    }, [update])
    const DocumentVerifyToggle = (email) => {
        axios.put(`${url}/api/update/doc/${email}`)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        setupdate(1);
    }

    const documents = () => {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 backdrop-blur-sm bg-opacity-75">
                <div className='relative  w-[60%] h-full max-md:w-full shadow-md items-center mt-20 justify-center max-md:-mt-20 rounded'>
                    <RiCloseLine className='absolute -top-1 -right-1 text-5xl cursor-pointer hover:scale-110 text-red-800' onClick={()=>setDocumentBox(false)} />
                    <div>
                        <MdKeyboardDoubleArrowLeft className='absolute top-[40%] left-0 text-6xl cursor-pointer hover:scale-110 text-gray-500' onClick={()=>decID(id)} />
                        {/* <img src={`${url}/uploads/documents/${imgData[id]}`} className='w-full h-full' /> */}
                        <img src={`${imgData}`} className='w-full h-full' />
                        <MdKeyboardDoubleArrowRight className='absolute top-[40%] right-0 text-6xl cursor-pointer hover:scale-110 text-gray-500' onClick={()=>incID(id)} />
                    </div>
                </div>
            </div>
        )
    }
    
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
                    {docData && docData.map((item, index) =>
                        <tr className={`odd:bg-white even:bg-gray-50 ${docData.length-1 === index ? '' : 'border-b-4'} border-gray-300`} key={item.id}>
                            <td className="px-2 max-md:px-1 py-4 max-md:py-1 text-2xl max-md:text-lg flex items-start">{index+1}</td>
                            <td className="px-10 max-md:px-1 py-4 max-md:py-1">
                                {item?.img ? 
                                    <>
                                        <img src={`${item.img}`} className='flex justify-center item-center size-36 max-md:h-20 max-md:size-28 rounded-full border-2 border-black'/>
                                        <span className='-ml-10'>{item.firstName}</span>
                                    </> :
                                    <>
                                        <img src={`${url}/uploads/vendors/photo/${item.photo}`} className='flex justify-center item-center size-36 max-md:h-20 max-md:size-28 rounded-full border-2 border-black'/>
                                        <span className='-ml-10'>{item.firstName}</span>
                                    </>
                                }
                            </td>
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 text-left">
                                <div>Address : {item.address}</div>
                                <div>Contact : {item.phone}</div>
                                <div>Email : {item.email}</div>
                            </td>
                            
                            <td className="px-4 max-md:px-1 py-4 max-md:py-1 max-md:hidden">
                                {item?.img ? 
                                    <>
                                        <img 
                                            src={`${item.img}`} 
                                            className='w-60 h-36'
                                            onClick={()=>documentToggle(item)}
                                        />
                                    </> :
                                    <>
                                        <img 
                                            src={`${url}/uploads/documents/${item.adhar}`} 
                                            className='w-60 h-36'
                                            onClick={()=>documentToggle(item)}
                                        />
                                    </>
                                }
                            </td>
                            {item.status === 1 ? 
                                <td className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-green-600 max-md:hidden">Verified</td> :
                                <td 
                                    className="px-4 max-md:px-1 py-4 max-md:py-1 font-semibold text-yellow-500 max-md:hidden hover:cursor-pointer"
                                    onClick={()=>DocumentVerifyToggle(item.email)}    
                                >Verify</td>
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
