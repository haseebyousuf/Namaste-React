import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <h1 className='logo'>
          {" "}
          Foodie<span>Fiesta</span>
        </h1>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <AiOutlineShoppingCart size='1.5rem' />
      </div>
    </header>
  );
};

export default Header;
