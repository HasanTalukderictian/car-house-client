import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])


    return (
        <div className='mt-4'>
            <div className='my-6 justify-center text-center space-x-4 space-y-4'>
                <h3 className='text-3xl text-orange-600'>Our Services </h3>
                <h3 className='text-6xl text-Black-600'>Our Services Area </h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCart key={service._id}
                    service={service}></ServicesCart>)
                }
            </div>
        </div>
    );
};

export default Services;