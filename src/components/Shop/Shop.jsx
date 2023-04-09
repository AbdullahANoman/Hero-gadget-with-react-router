import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';
import ProductCard from '../Cards/ProductCard';

const Shop = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-container gap-10  '>
            {
                products.map(product=><ProductCard product={product} key={product.id}></ProductCard>)
            }
        </div>
    );
};

export default Shop;