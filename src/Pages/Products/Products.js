import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-red.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    },[]);
    return (
        <div className='mt-10'>
            <h2 className='text-xl text-center mt-12 font-bold'>Our Products</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
                {
                    products.map(product => <Product key={product._id}
                    product={product}
                    ></Product>)
                }
            </div> 
        </div>
    );
};

export default Products;