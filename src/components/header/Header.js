import React from 'react';
import logo from '../../image/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>

            <img src={logo} alt="" />
            <nav>
                  <a href="shop">Shop</a>
                  <a href="review">Review</a>
                  <a href="manage">Manage </a>
                  <a href="cart">Cart</a>
                  <a href="catagory">Catagory </a>
            </nav>
        </div>
    );
}; 

export default Header;  