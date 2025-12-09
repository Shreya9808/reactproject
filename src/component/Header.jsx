import React from 'react';
import "../styles/Header.css";
import AddTocart from './AddTocart';
import { Link } from 'react-router';
const Header = () => {
  return (
    <>
     <header className="navbar">
      <div className="logo">MyStore</div>

      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
           <li><Link to="#">Products</Link></li>
         
        </ul>
      </nav>
      <AddTocart />
    </header>
    </>
  )
}

export default Header;
