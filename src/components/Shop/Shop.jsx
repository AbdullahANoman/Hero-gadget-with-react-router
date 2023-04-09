import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h3>Shop Page</h3>
        </div>
    );
};

export default Shop;