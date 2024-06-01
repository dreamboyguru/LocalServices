import React from 'react'

const Slots = () => {
    return (
        <div className='flex justify-center'>
            <div className='min-h-96 text-2xl w-[60%] max-md:w-full text-black overflow-x-auto'>
                <table className="min-w-full border-collapse border border-gray-300 shadow-lg text-lg">
                    <thead>
                        <tr className="bg-gray-500 text-white max-md:text-sm">
                            <th className="border border-gray-300 px-4 py-2 w-1/12 max-md:px-1">SL.No</th>
                            <th className="border border-gray-300 px-4 py-2 w-3/12 max-md:px-1">Duration</th>
                            <th className="border border-gray-300 px-4 py-2 w-4/12 max-md:px-1">Rates</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                            <td className="border border-gray-300 px-4 py-2">1</td>
                            <td className="border border-gray-300 px-4 py-2">One Work</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <input type="number" className="border border-gray-300 rounded p-2 w-full" />
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                            <td className="border border-gray-300 px-4 py-2">2</td>
                            <td className="border border-gray-300 px-4 py-2">One Day</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <input type="number" className="border border-gray-300 rounded p-2 w-full" />
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                            <td className="border border-gray-300 px-4 py-2">3</td>
                            <td className="border border-gray-300 px-4 py-2">One Month</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <input type="number" className="border border-gray-300 rounded p-2 w-full" />
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 max-md:text-sm">
                            <td colSpan={2} className="border border-gray-300 px-4 py-2">Max Work per Day, If One Work Charges</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <input type="number" className="border border-gray-300 rounded p-2 w-full" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <button type='Submit' className='bg-gray-500 hover:bg-gray-600 text-white items-end rounded-md p-2 px-8 max-md:mr-1 max-md:px-3 max-md:py-1 max-md:text-lg hover:scale-105 duration-300'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Slots
