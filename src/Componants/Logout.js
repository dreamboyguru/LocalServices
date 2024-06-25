import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    localStorage.removeItem('type');
    localStorage.removeItem('verify');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('blur')
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/')
        window.location.reload();
    }, [navigate])
  return (
    <div>
      
    </div>
  )
}

export default Logout
