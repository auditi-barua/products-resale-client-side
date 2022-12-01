import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const{category_name} = category 
    return (
        <div className='mt-5'>
            <button className='btn btn-outline mx-2'><Link>{category_name}</Link></button>
        </div>
    );
};

export default Category;