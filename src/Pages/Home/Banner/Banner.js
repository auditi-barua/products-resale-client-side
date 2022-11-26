import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url("https://i.ibb.co/YhDxvFs/bedroom.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl  text-gray-900  font-bold">Furnitureland</h1>
            <p className="mb-5 font-bold text-white">Explore our furniture & home furnishing range. Our Furniture is a bangladeshi leader in life at home.First and Largest Furniture Online shop in Bangladesh. Upto 50% Off on Furniture Price in BD. </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;