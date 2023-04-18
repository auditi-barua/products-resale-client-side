import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/img1.jpg'
const Banner = () => {
  return (
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img1} alt='' />
    <div>
      <h1 className="text-5xl font-bold">Welcom to Furnitureland</h1>
      <p className="py-6">We offer a unique selection of stylish and contemporary furniture.Online Furniture: First and Largest Furniture Online shop in Bangladesh. Upto 50% Off on Furniture Price in BD. Types: Sofa, Bed, Dining Table, Almirah etc...</p>
      <button className="btn btn-primary"><Link to='/signup'>Shop Now</Link></button>
    </div>
  </div>
</div>
  );
};

export default Banner;