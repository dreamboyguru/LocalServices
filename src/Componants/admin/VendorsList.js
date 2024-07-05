import React from 'react'

const UsersList = () => {
    const leave = [
        {name : 'Jhon don', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '7353249095', status: '1'},
        {name : 'Jhon don2', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '7353249095', status: '2'}, 
        {name : 'Jhon don3', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '7353249095', status: '1'},
        {name : 'Jhon don4', address : '#123, 1cross, house, xyz, Begalore, 591222', contact: '7353249095', status: '0'}
    ]
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
                <tr className="odd:bg-white even:bg-gray-50" key={item.id}>
                    <td className="border border-gray-300 px-2 max-md:px-1 py-4 max-md:py-1">{index+1}</td>
                    <td className="border border-gray-300 px-4 max-md:px-1 py-4 max-md:py-1">{item.name}</td>
                    <td className="border border-gray-300 px-4 max-md:px-1 py-4 max-md:py-1 text-left">
                        <div>Address : {item.address}</div>
                        <div>Contact : {item.contact}</div>
                    </td>
                    {item.status && item.status === '0' ? 
                        <td className="border border-gray-300 px-1 max-md:px-1 py-4 max-md:py-1 font-semibold text-yellow-600">Processing</td> :
                        item.status === '1' ? 
                            <td className="border border-gray-300 px-1 max-md:px-1 py-4 max-md:py-1 font-semibold text-green-600">Active</td> :
                            <td className="border border-gray-300 px-1 max-md:px-1 py-4 max-md:py-1 font-semibold text-red-600">blocked</td>
                    }
                </tr>
            )}
            
        </tbody>
    </table>

  )
}

export default UsersList
