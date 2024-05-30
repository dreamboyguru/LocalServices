import React from 'react'
import ServicePage from './ServicePage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Vendors from './Vendors'

const UserHome = () => {
    const navigate = useNavigate();
    navigate('/services')
  return (
    <div>
        
    </div>
  )
}

export default UserHome
