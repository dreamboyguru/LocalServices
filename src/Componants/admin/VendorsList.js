import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UsersList = () => {
    const [load, setLoad] = useState(false);
    const [leave, setLeave] = useState([]);
    const url = process.env.REACT_APP_API_URL;
    
    // const leave = [
    //     {firstName : 'Jhon don', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '7353249095', status: '1'},
    //     {firstName : 'Jhon don2', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '7353249095', status: '2'}, 
    //     {firstName : 'Jhon don3', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '7353249095', status: '1'},
    //     {firstName : 'Jhon don4', address : '#123, 1cross, house, xyz, Begalore, 591222', phone: '7353249095', status: '0'}
    // ]

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/vendors`);
                console.log(response.data);
                setLeave(response.data);
                // localStorage.setItem('vendorsCount', response.data.length);
            } catch (err) {
                console.log(err);
            } finally {
                setLoad(false)
            }
        }
        fetchData();
    }, [load])

    const handleStatus = (data) => {
        let {id, status} = data;
        if(status === 0) {
            status = 1;
        } else {
            status = 0;
        }

        // console.log(id, status);
        axios.put(`${url}/api/vendors/staus`, {id : id, status : status})
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
            .finally(setLoad(true))
    }

  return (
    
    <table className="min-w-full border-collapse border border-gray-300 shadow-lg max-md:text-xs">
        <thead>
            <tr className="bg-gray-500 text-white">
                <th colSpan="2" className="border border-gray-300 px-2 py-4 max-md:py-3 w-1/3 max-md:px-1">Name</th>
                <th className="border border-gray-300 px-2 py-4 max-md:py-3 w-full max-md:px-1">Details</th>
                <th className="border border-gray-300 px-2 py-4 max-md:py-3 w-1/4 max-md:px-1">Status</th>
            </tr>
        </thead>
        <tbody className="text-center text-black">
            {leave && leave.map((item, index) =>
                <tr className="odd:bg-white even:bg-gray-50" key={index}>
                    <td className="border border-gray-300 px-2 max-md:px-1 py-4 max-md:py-1">{index+1}</td>
                    <td className="border border-gray-300 px-4 max-md:px-1 py-4 max-md:py-1">{item.firstName}</td>
                    <td className="border border-gray-300 px-4 max-md:px-1 py-4 max-md:py-1 text-left">
                        <div>Address : {item.address}</div>
                        <div>Contact : {item.phone}</div>
                        <div>Email : {item?.email}</div>
                    </td>
                    {item.status && item.status === 1 ? 
                        
                        <td 
                            onClick = {()=>handleStatus(item)}
                            className="border border-gray-300 px-1 max-md:px-1 py-4 max-md:py-1 font-semibold cursor-pointer text-red-600">
                        blocked</td> : 
                            <td onClick = {()=>handleStatus(item)}
                            className="border border-gray-300 px-1 max-md:px-1 py-4 max-md:py-1 font-semibold cursor-pointer text-green-600">
                        Active</td>
                    }
                </tr>
            )}
            
        </tbody>
    </table>

  )
}

export default UsersList
