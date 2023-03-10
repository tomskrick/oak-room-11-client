import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://food-junction-server.vercel.app/services')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='text-center container mx-auto mt-10 font-semibold'>
            <h2 className="text-5xl ">Our Products</h2>
            <p className='text-center'>We there show our products those for you</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;