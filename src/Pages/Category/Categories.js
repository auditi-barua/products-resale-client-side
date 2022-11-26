import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, []);
    return (
        <section className='mt-12'>
            <h3 className='text-xl text-center font-bold '>Trending products</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6'>
            {
                    categories.map(category => <Category key={category.id}
                    category={category}
                    ></Category>)
                }
           </div>
        </section>
    );
};

export default Categories;