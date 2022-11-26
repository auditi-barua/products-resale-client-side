import React from 'react';

const Product = ({product}) => {
    const { name, img, location, seller_name, orginal_price, resale_price,years_of_use } = product;
    return (
        <div className='card bg-gray-600  shadow-xl'>
            <figure className="px-5 pt-5">
                <img src={img} alt='' />
       </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{location}</p>
                <p>{seller_name}</p>
                <p>{orginal_price}</p>
                <p>{resale_price}</p>
            </div>
            
   </div>
    );
};

export default Product;