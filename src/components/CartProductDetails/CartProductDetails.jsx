import React from 'react';

const CartProductDetails = ({cart,handleRemove}) => {
    const {id,name,price,picture,quantity} = cart;
    return (
        <div className='flex gap-5 justify-between w-1/2  '>
            <div className='flex gap-5 mb-5'>
                <div>
                <img className='h-52' src={picture} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>Quantity : {quantity}</p>
                    <button onClick={()=>handleRemove(id)}>Remove</button>
                </div>
            </div>
            <div>
                <p>{price}$</p>
            </div>
        </div>
    );
};

export default CartProductDetails;