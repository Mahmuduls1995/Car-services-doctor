import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services">
            <h2 className=" text-indigo-500 text-center mt-5">Our services</h2>
           <div class="lg:grid-cols-3 grid md:grid-cols-2 sm:grid-cols-1">
           {
                services.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;