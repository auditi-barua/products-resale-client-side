import React from 'react';

const Product = ({product}) => {
    const { name, img, location, seller_name, orginal_price, resale_price, years_of_use } = product;
    console.log(product);
    return (
        <div className="card w-86 bg-gray-700 text-white hover:scale-110 duration-100 mt-5 shadow-xl">
         <figure><img src={img} className='w-96 h-48' alt="" /></figure>
          <div className="card-body">
                <h2 className="card-title">Product: {name}</h2>
                <p>Location :{location}</p>
                <p>Original Price : ${orginal_price}</p>
                <p>Resale Price : ${resale_price}</p>
                <p>Usage: {years_of_use} months</p>
                <p>Seller name: {seller_name}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;