import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ServicePage() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/service')
      .then(response => {
        setServices(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='pt-20 flex flex-wrap justify-center'>
      {services.length > 0 ? 
        services.map((service, index) => (
          <div key={index} className='bg-gray-600 w-52 max-md:w-36 max-sm:w-full max-sm:h-auto h-auto m-2 max-md:m-1 rounded-md overflow-hidden shadow-lg p-0.5 hover:scale-110 duration-500'>
            <img 
              src='https://img.freepik.com/vrije-vector/wilde-natuur-verticale-poster_23-2148724602.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710633600&semt=ais' 
              alt={service.name} 
              className='w-full h-52 max-sm:h-auto object-cover rounded-t-md'
            />
            <div className='item-center p-2'>
              <h2 className='text-lg font-semibold text-center justify-center'>{service.sample}</h2>
            </div>
          </div>
        ))
        : <p className='text-gray-500'>No Services Found...</p>
      }
    </div>
  );
}

export default ServicePage;
