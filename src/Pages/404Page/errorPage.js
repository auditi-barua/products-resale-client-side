import React from 'react';
import img from '../../assets/images/img.jpg'
const errorPage = () => {
    return (
        <div>
            <h1>page not found</h1>
            <img src={ img} alt='' />
        </div>
    );
};

export default errorPage;