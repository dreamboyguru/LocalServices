import React from 'react'

const Slots = () => {
  return (
    <div className='min-h-96 text-2xl w-full bg-white text-black overflow-x-auto'>
        <table className="min-w-full border-collapse border border-gray-300 shadow-lg">
            <thead>
                <tr className="bg-gray-400 text-gray-700 max-md:text-lg">
                    <th className="border border-gray-300 px-4 py-2 w-1/12 max-md:px-1">SL.No</th>
                    <th className="border border-gray-300 px-4 py-2 w-3/12 max-md:px-1">Duration</th>
                    <th className="border border-gray-300 px-4 py-2 w-4/12 max-md:px-1">Rates</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr className="odd:bg-white even:bg-gray-50 max-md:text-lg">
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">1 Work</td>
                    <td className="border border-gray-300 px-4 py-2">
                        <input type="number" className="border border-gray-300 rounded p-2 w-full" />
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 max-md:text-lg">
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">1 Day</td>
                    <td className="border border-gray-300 px-4 py-2">
                        <input type="number" className="border border-gray-300 rounded p-2 w-full" />
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 max-md:text-lg">
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">1 Month</td>
                    <td className="border border-gray-300 px-4 py-2">
                        <input type="number" className="border border-gray-300 rounded p-2 w-full" />
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="flex justify-end mt-4">
        <button type='Submit' className='bg-gray-400 hover:bg-gray-800 hover:text-white text-black items-end rounded-md p-2 px-8 mr-16 max-md:mr-1 max-md:px-4 max-md:text-lg'>Submit</button>
  </div>

    </div>
  )
}

export default Slots
