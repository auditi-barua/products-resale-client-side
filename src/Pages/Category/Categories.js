import React, { useEffect, useState } from 'react';
import Category from '../Category/Category'
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            });
    },[]);
    return (
        <div>
            <h2 className='text-xl text-center mt-12 font-bold'>Our Categories</h2>   
            <div className='flex justify-center  '>
            {
                categories.map(category => <Category key={category.id}
                category={category}
                ></Category>)
            }   
            </div>
          
        </div>
    );
};

export default Categories;