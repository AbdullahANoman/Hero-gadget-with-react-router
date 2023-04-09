import React, { useState } from 'react';
import { getLocalStorageData } from '../Utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';
import CartProductDetails from '../CartProductDetails/CartProductDetails';

const Cart = () => {
    const {cart,loadData} = useLoaderData()
    const [carts,setCarts] = useState(cart)
    // const savedCart = getLocalStorageData()

    // let cart = [];
    // for(const id in savedCart){
    //   const value =  products.find(p=>p.id===id)
    //   if(value){
    //     value.quantity = savedCart[id];
    //     cart.push(value)
    //   }
    // }
    console.log(cart)
    console.log(loadData)
    const handleRemove = id =>{
        const remaining = carts.filter(cart=>cart.id!==id)
        setCarts(remaining)
        
    }
    return (
        <div className='my-container'>
            {
                carts.length !== 0 ? <p>Review Cart Items</p> : <p>Cart Is Empty !</p>
            }
            <div>
                {
                    carts.map(p=><CartProductDetails key={p.id} cart={p} handleRemove={handleRemove}></CartProductDetails>)
                }
            </div>
        </div>
    );
};

export default Cart;