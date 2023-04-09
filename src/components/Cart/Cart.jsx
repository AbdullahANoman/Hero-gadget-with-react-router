import React from 'react';
import { getLocalStorageData } from '../Utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const products = useLoaderData()
    // const savedCart = getLocalStorageData()

    // let cart = [];
    // for(const id in savedCart){
    //   const value =  products.find(p=>p.id===id)
    //   if(value){
    //     value.quantity = savedCart[id];
    //     cart.push(value)
    //   }
    // }
    console.log(products)

    return (
        <div className='my-container'>
            
        </div>
    );
};

export default Cart;