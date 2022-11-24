import React from 'react';

const Service = ({service}) => {
    const { img, name, details,bg } = service;
    console.log(service)
    return (
        <div className={`card bg-gray-300  shadow-xl ${bg}`}>
            <figure className="px-5 pt-5">
                <img src={img} alt='' className='w-24' />
            </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Service;