import React from 'react'
import "../styles/AddTocart.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const AddTocart = () => {
    const cartselector= useSelector((state) => state.cart.items);
    console.log(cartselector)
  return (  
    <div>
      <Link to="/cart">
      
      <div className="cart-container">
      <i className="fas fa-shopping-cart cart-icon"></i>
      <span className="cart-count">{cartselector.length?cartselector.length:0}</span>
      </div>
      
      
      
      </Link>
        



      
    </div>
  )
}

export default AddTocart
