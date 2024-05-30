import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tabs from './Tabs'
import Dashboard from './Dashboard'
import Test from './Test'

const VendorHome = () => {
  return (
    <div>
        {/* <Tabs /> */}
        {/* <Routes> */}
            <Route path='/' element={<Dashboard />} />
            <Route path='/test' element={<Test />} />
        {/* </Routes>       */}
    </div>
  )
}

export default VendorHome
