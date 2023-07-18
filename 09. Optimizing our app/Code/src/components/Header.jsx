import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
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
          <li>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='link' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='nav-data'>
        <span className='online-status'>
          online Status: {onlineStatus ? "🟢" : "🔴"}
        </span>
        <AiOutlineShoppingCart size='1.5rem' />
      </div>
    </header>
  );
};

export default Header;
