import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category}) => {
    const { category_name} = category;
    return (
      <div>
        <button className='btn btn-ghost'><Link className='text-xl text-start'>{category_name}</Link></button>
      </div>
    );
};

export default Categories;