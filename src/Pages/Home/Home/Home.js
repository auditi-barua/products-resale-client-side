import React, { useContext } from 'react';
import Categories from '../../Category/Categories';
import FeaturedProducts from '../../FeatureProducts/FeatureProdcuts';
import Services from '../../Service/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Categories></Categories>
            <FeaturedProducts></FeaturedProducts>
            <Services></Services>
        </div>
    );
};

export default Home;