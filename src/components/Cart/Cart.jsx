import React from 'react';
import { getLocalStorageData } from '../Utilities/fakeDB';

const Cart = () => {
    const data = getLocalStorageData()
    console.log(data)
    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;