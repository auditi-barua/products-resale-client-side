import React from 'react';

const Categories = ({category}) => {
    const { category_name, img } = category;
    return (
        <div className='card mt-5 bg-gray-600  shadow-xl'>
            <figure className="px-5 pt-5">
                <img src={img} alt='' className='w-24' />
       </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">{category_name}</h2>    
            </div>
            <button className='btn btn-primary'>See details</button>
   </div>
    );
};

export default Categories;