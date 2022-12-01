import React from 'react';

const Product = ({product }) => {
  const { name, img, location, seller_name, original_price, resale_price, year_of_use } = product;
  
  const bookingProducts = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = { 
      email,
      phone,
  }
  }

    
  
    return (
        <div className="card card-compact w-86 bg-base-100 scale-105 shadow-xl mt-5">
  <figure><img src={img} alt="Shoes" className='h-48 w-96' /></figure>
    <div className="card-body">
                <h2 className="card-title">Prodcut Name: {name}</h2>
                <p>Original Price : ${original_price}</p>
                <p>Resale Price : ${resale_price}</p>
                <p>Year of use : {year_of_use}monts</p>
                <p>Seller Name : {seller_name}</p>
                <p>Location : {location}</p>
    <div className="card-actions justify-end">
{/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">Book Now</label>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="py-4">
                  <form>
                  <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <input value='submit' className='btn btn-accent'/>
                  </form>
                </p>
  </div>
</div>
  
  </div>
        </div>
        </div>
    );
};

export default Product;