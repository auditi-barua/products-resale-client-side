import React from 'react';
import Category from '../../Category/Category';
import Products from '../../Products/Products';

import Services from '../../Service/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Category></Category>
            <Services></Services>
        </div>
    );
};

export default Home;