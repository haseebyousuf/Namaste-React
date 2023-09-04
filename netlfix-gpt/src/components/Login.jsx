/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  return (
    <div className='bg-fill bg-login-background'>
      <Header />
      <div className=' flex items-center justify-center h-[100vh] bg-[rgba(0,0,0,.35)] '>
        <form className='bg-[rgba(0,0,0,.80)] p-16 mx-3  flex flex-col rounded-sm'>
          <h1 className='mb-6 text-4xl font-bold text-white'>
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInFrom && (
            <>
              <input
                type='text'
                placeholder='Your Name'
                className='px-5 py-4 m-2 rounded-sm bg-[#333] h-12 w-80 outline-none text-white'
              />
              <span className='mx-2 text-sm text-yellow-600'></span>
            </>
          )}
          <input
            type='email'
            placeholder='Email'
            className='px-5 py-4 m-2 rounded-sm bg-[#333] h-12 w-80 outline-none text-white'
          />
          <span className='mx-2 text-sm text-yellow-600'></span>

          <input
            type='password'
            placeholder='Password'
            className='px-5 py-4 m-2 rounded-sm bg-[#333] h-12 w-80 outline-none text-white'
          />
          <button className='m-2 h-12 w-80 mt-6 bg-[#e50914] rounded-sm text-white font-bold cursor-pointer'>
            Sign In
          </button>
          <div className='flex justify-between mx-2 my-1'>
            <span>
              <input type='checkbox' />
              <span className='pl-1 text-sm text-[#b3b3b3]'>Remember me</span>
            </span>
            <Link className='text-sm text-[#b3b3b3]' to='#'>
              Need Help?
            </Link>
          </div>
          <p className='m-2 text-[#b3b3b3]'>
            {isSignInFrom ? "New to Netflix?" : "Already Registered?"}
            <span
              onClick={() => setIsSignInFrom(!isSignInFrom)}
              className='ml-2 text-white cursor-pointer hover:underline'
            >
              {isSignInFrom ? "Sign Up Now." : "Sign In Now."}
            </span>
          </p>

          <span className='m-2 w-80 text-xs  text-[#b3b3b3]'>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
