import React from 'react';
import Categories from '../../Category/Categories';
import Products from '../../Products/Products';
import Services from '../../Service/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
        
             <Banner></Banner>
            <Categories></Categories>
            <Products></Products>
            <Services></Services>
        </div>
    );
};

export default Home;