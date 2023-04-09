import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';
import ProductCard from '../Cards/ProductCard';
import { addToDB } from '../Utilities/fakeDB';

const Shop = () => {
    const products = useLoaderData();
    const [cart,setCart] = useState(products)
    //Handle add to cart button
    const handleAddToCart = (id) =>{
        addToDB(id)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-container gap-10  '>
            {
                cart.map(product=><ProductCard product={product}  key={product.id} handleAddToCart={handleAddToCart}></ProductCard>)
            }
        </div>
    );
};

export default Shop;