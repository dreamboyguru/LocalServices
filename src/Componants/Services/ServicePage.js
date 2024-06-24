import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ServicePage() {
  const [services, setServices] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    axios.get(`${url}/api/services`)
      .then(response => {
        // console.log(response.data);
        setServices(response.data);
      })
      .catch(err => {
        console.log(err);
        setServices([
          {name : 'Driver', sample : 'Driver', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'}, 
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Driver', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'}, 
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Driver', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'}, 
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Driver', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'}, 
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Driver', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'}, 
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Driver', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'}, 
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'},
          {name : 'Driver', sample : 'Plumber', img: 'https://cdn.kinocheck.com/i/113c7rh2vw.jpg'}
        ]);
      });
    
  }, []);
  return (
    <div className='relative pt-20 max-md:pt-24 flex flex-wrap justify-center'>
      <div className='fixed top-3 max-md:top-16 left-1/2 -translate-x-1/2 z-40 text-gray-50'>
            <h1 className='text-2xl max-md:text-lg font-bold max-md:text-black '>OUR SERVICES</h1>
        </div>
      {services.length > 0 ? 
        services.map((service, index) => (
          <div key={index} className='bg-gray-600 w-52 max-md:w-36 max-sm:w-[48%] max-sm:h-auto h-auto m-2 max-md:m-0.5 rounded-md overflow-hidden shadow-lg p-0.5 hover:scale-105 duration-500'>
            <Link 
              to = '/vendors'
              state = {service} 
            >
              {/* <img 
                src={`${url}/uploads/Services/${service.img}`} 
                alt={service.name} 
                className='w-full h-52 max-sm:h-auto object-cover rounded-t-md'
              /> */}
              <img 
                src={`${service.img}`} 
                alt={service.name} 
                className='w-full h-52 max-sm:h-auto object-cover rounded-t-md'
              />
              <div className='item-center p-2'>
                <h2 className='text-lg font-semibold text-center justify-center'>{service.name}</h2>
              </div>
            </Link>
          </div>
        ))
        : <p className='text-gray-500'>No Services Found...</p>
      }
    </div>
  );
}

export default ServicePage;
