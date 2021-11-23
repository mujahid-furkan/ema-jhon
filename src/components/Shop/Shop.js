import React from 'react';
import './Shop.css'
import {useState, useEffect } from 'react';
import Product from '../product/Product';
import Cart from './../Cart/Cart';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    
        function handleAddProduct(product){
            
            const newCart=[...cart,product]
            setCart(newCart)
        }
       
    

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setProduct(data))
            
        }, [])
        
        
        useEffect(() => {
            fetch('curl https://api.unsplash.com/user/')
            .then(res=>res.json())
            .then(data=> console.log(data))
            .catch(err=>console.log(err))
        }, [])
    return (
        <div className='shop-container'>
            
            <div className="product-container">
                 {
                    products.map(item=> <Product addProduct={handleAddProduct} product={item}></Product>)
                }
            </div>
                
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop; 