import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart

    let productPrice=0;
for(var i=0; i<cart.length; i++){
    const product=cart[i];
    productPrice= productPrice+product.price
}


let shippingCost=0;

if(productPrice>200){
    shippingCost=0
}else if(productPrice>150){
    shippingCost=5.89
}else if(productPrice>50){
    shippingCost=10.89
}

function fixedNmbr(nmber){
    const newNmbr=nmber.toFixed(2);
    return Number(newNmbr)
}
let grandPrice=productPrice +shippingCost 

    return (
        <div>
            <h4>Cart Product</h4>
            <p>Added Item : {cart.length}</p>
            <p>Product Price : {fixedNmbr(productPrice)}</p>
            <p>Shopping Cost : {fixedNmbr(shippingCost)}</p>
           
            <p>Total Price : {fixedNmbr(grandPrice)}</p>
            <button className='orderBtn' >Order Now</button>
        </div>
    );
};

export default Cart;