import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let total = 0;
    let shipingCharge = 0;
    let GrandTotal = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipingCharge = shipingCharge + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    GrandTotal = GrandTotal + total + shipingCharge + tax;
    return (
        <div className='cart'>
            <h2>order summary</h2>
            <p>select items:{quantity}</p>
            <p>total price:${total}</p>
            <p>total Shipping Charge:${shipingCharge}</p>
            <p>tax:{tax}</p>
            <p>Grand total:${GrandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;