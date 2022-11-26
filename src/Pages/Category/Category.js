import React from 'react';

const Category = ({category}) => {
    const { category_name,img } = category;
    return (
        <div className='card bg-gray-600  shadow-xl'>
             <figure className="px-5 pt-5">
                <img src={img} alt='' />
            </figure>
              <div className="card-body items-center text-center">
                <h2  className="card-title">{category_name}</h2>
            </div>
            <button className='btn btn-secondary'>See product</button>
        </div>
    );
};

export default Category;