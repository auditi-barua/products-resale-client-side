import React from 'react';

const Categories = ({category}) => {
    const { category_name, img } = category;
    return (
        <div className="card mt-5 card-compact w-86 bg-gray-600 shadow-xl">
        <figure><img src={img} className='w-96 h-48 ' alt="Shoes" /></figure>
        <div className="card-body">
                <h2 className="card-title text-white">Category: {category_name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Categories;