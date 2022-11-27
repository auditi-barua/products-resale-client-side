import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const Category = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
            setCategories(data)
        })
    })
    return (
        <div className='mt-10'>
            <h2 className='text-xl text-center font-bold '>Our Categories</h2>
            <div>
            {
                categories.map(category => <Categories key={category.id}
                    category={category}
                ></Categories>)
                }
                </div>
        </div>
    );
};

export default Category;