import React from 'react';
import Service from './Service';

const Services = () => {
    const service_data = [
        {
            id: 1,
            name: "Free Shipping",
            img:"https://i.ibb.co/wQznNXg/truck.jpg"  ,
            details: "With free shipping, your order is delivered five to eight days after all your items are available to ship, including pre-order items.",
            bg: "bg-white"
        },
        {
            id: 2,
            name: "Easy Returns",
            img: "https://i.ibb.co/qry7Tf1/easy-returns.png",
            details: "With free shipping, your order is delivered five to eight days after all your items are available to ship, including pre-order items.",
            bg: "bg-blue-200"
        },
        {
            id: 3,
            name: "Secure Payments",
            img:"https://i.ibb.co/xY4Q3y7/secure-payment.jpg",
            details: "With free shipping, your order is delivered five to eight days after all your items are available to ship, including pre-order items.",
            bg: "bg-white"
        },
        {
            id: 4,
            name: "Back Gurantee",
            img: "https://i.ibb.co/Pg9y9PP/back-gurantee.png",
            details: "With free shipping, your order is delivered five to eight days after all your items are available to ship, including pre-order items.",
            bg: "bg-cyan-200"
        }
    ]
    return (
        <div className=' mt-12 grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>
            {
                service_data.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;