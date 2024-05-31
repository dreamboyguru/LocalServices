import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    localStorage.removeItem('type');
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
