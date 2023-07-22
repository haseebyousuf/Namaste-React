import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
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
        <AiOutlineShoppingCart size='1.5rem' />
      </div>
    </header>
  );
};

export default Header;
