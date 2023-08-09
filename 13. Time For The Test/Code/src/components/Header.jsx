import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(userContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cart = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();
  return (
    <header className='py-5 flex justify-between items-end'>
      <div className='logo-container'>
        <h1 className='text-3xl font-bold'>
          {" "}
          Foodie<span className='text-[#ffa500]'>Fiesta</span>
        </h1>
      </div>
      <div className='list-none flex justify-around gap-30'>
        <ul className='list-none flex justify-around gap-20'>
          <li className='text-lg'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='text-lg'>
            <Link className='link' to='/about'>
              About
            </Link>
          </li>
          <li className='text-lg'>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-4'>
        <span className='online-status'>
          online Status: {onlineStatus ? "🟢" : "🔴"}
        </span>
        <span>
          {isLoggedIn ? (
            <button
              className='border border-black rounded-lg p-2 m-2 bg-gray-200'
              name='logout'
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className='border border-black rounded-lg p-2 m-2 bg-gray-200'
              name='login'
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          )}
        </span>
        <Link to='/cart' className='flex justify-between items-center gap-2'>
          <AiOutlineShoppingCart size='1.5rem' />
          <p className='font-bold text-lg'>({cart.length})</p>
        </Link>
        <span className='online-status'>{loggedInUser}</span>
      </div>
    </header>
  );
};

export default Header;
