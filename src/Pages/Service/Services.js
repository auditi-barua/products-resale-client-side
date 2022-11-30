import React from 'react';
import Service from './Service';

const Services = () => {
    const service_data = [
        {
            name: "Free Shipping",
            img:"https://i.ibb.co/wQznNXg/truck.jpg"  ,
            details: "With free shipping, your order is delivered five to eight days after all your items are available to ship, including pre-order items.",
            bg: "bg-white"
        },
        {
            name: "Easy return",
            img: "https://i.ibb.co/qry7Tf1/easy-returns.png",
            details: "If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.",
            bg: "bg-blue-200"
        },
        {
            name: "Secure Payments",
            img:"https://i.ibb.co/xY4Q3y7/secure-payment.jpg",
            details: "View Secure Returns (www.securereturns.com.au) location in Dhaka, Bangladesh , revenue, industry and description.",
            bg: "bg-white"
        },
        {
            name: "Back Gurantee",
            img: "https://i.ibb.co/Pg9y9PP/back-gurantee.png",
            details: "If supplier fails to ship on time or the product quality varies from what has been agreed upon, you may apply for refund on furnitureland within 30 days of ...",
            bg: "bg-cyan-200"
        }
    ]
    return (
        <section className='mt-12'>
            <h2 className="text-xl text-center font-bold">Our Services</h2> 
        <div className=' mt-12 grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>
            {
                service_data.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
            </section>
    );
};

export default Services;