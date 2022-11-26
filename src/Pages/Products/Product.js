import React, { useEffect, useState } from 'react';
import Products from './Products';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);
    return (
        <div className=''>
            {
                products.map(product => <Products key={product.id}
                product={product}
                ></Products>)
            }
        </div>
    );
};

export default Product;