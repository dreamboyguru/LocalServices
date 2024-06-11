import axios from 'axios';
import React from 'react'


const Test = () => {

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/collection/collection_id?language=en-US',
        headers: {accept: 'application/json'}
    };

    
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
        console.error(error);
    });
    
    return (
    <div>
      
    </div>
  )
}

export default Test
