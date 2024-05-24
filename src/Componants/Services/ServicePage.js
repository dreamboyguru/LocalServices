import React, { useEffect, useState } from 'react';

function ServicePage() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    // Simulated data fetch
    setServices([
      {
        img: 'https://img.freepik.com/vrije-vector/wilde-natuur-verticale-poster_23-2148724602.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710633600&semt=ais',
        name: 'Driver'
      },
      {
        img: 'https://img.freepik.com/vrije-vector/wilde-natuur-verticale-poster_23-2148724602.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710633600&semt=ais',
        name: 'Plumber'
      },
      {
        img: 'https://img.freepik.com/vrije-vector/wilde-natuur-verticale-poster_23-2148724602.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710633600&semt=ais',
        name: 'Driver'
      },
      {
        img: 'https://img.freepik.com/vrije-vector/wilde-natuur-verticale-poster_23-2148724602.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710633600&semt=ais',
        name: 'Plumber'
      },
      {
        img: 'https://img.freepik.com/vrije-vector/wilde-natuur-verticale-poster_23-2148724602.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710633600&semt=ais',
        name: 'Driver'
      },
      {
        img: 'https://img.freepik.com/vrije-vector/wilde-natuur-verticale-poster_23-2148724602.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1710633600&semt=ais',
        name: 'Plumber'
      }
    ]);
  }, []);

  return (
    <div className='pt-20 flex flex-wrap justify-center'>
      {services.length > 0 ? 
        services.map((service, index) => (
          <div key={index} className='bg-gray-600 w-52 h-auto m-5 rounded-md overflow-hidden shadow-lg p-0.5'>
            <img src={service.img} alt={service.name} className='w-full h-52 object-cover rounded-t-md' />
            <div className='itme-center p-2'>
              <h2 className='text-lg font-semibold text-center justify-center'>{service.name}</h2>
              </div>
          </div>
        ))
        : <p className='text-gray-500'>No Services Found...</p>
      }
    </div>
  );
}

export default ServicePage;
