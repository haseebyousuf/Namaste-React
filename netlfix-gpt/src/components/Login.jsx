/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { loginValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../state/userSlice";
import { customErrorMessage } from "../utils/customErrorMessages";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handelFormSubmit = () => {
    const message = loginValidation(
      email.current.value,
      password.current.value,
      name.current?.value,
      isSignInFrom
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignInFrom) {
      setIsLoading(true);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(customErrorMessage(error.code));
        });
    } else {
      //sign up logic
      setIsLoading(true);

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(login({ uid, email, displayName }));
            })
            .catch((error) => {
              setIsLoading(false);
              setErrorMessage(customErrorMessage(error.code));
            });
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(customErrorMessage(error.code));
        });
    }
  };

  return (
    <div className='bg-fill bg-login-background'>
      <Header />
      <div className=' flex items-center justify-center h-[100vh] bg-[rgba(0,0,0,.35)] '>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=' bg-[rgba(0,0,0,.80)] px-5 py-10 sm:p-16 flex flex-col rounded-[4px]'
        >
          <h1 className='mb-6 text-4xl font-bold text-white'>
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </h1>
          {errorMessage && (
            <div className='bg-[#e87c03] rounded-[4px] m-2 p-2 h-10 text-xs text-white flex items-center'>
              {errorMessage}
            </div>
          )}
          {!isSignInFrom && (
            <>
              <input
                ref={name}
                type='text'
                placeholder='Your Name'
                className='px-5 py-4 m-2 rounded-[4px] bg-[#333] h-12 w-80 outline-none text-white'
              />
              <span className='text-sm text-yellow-600 '></span>
            </>
          )}
          <input
            ref={email}
            type='text'
            placeholder='Email'
            className='px-5 py-4 m-2 rounded-[4px] bg-[#333] h-12 w-80 outline-none text-white'
          />
          <span className='mx-2 text-sm text-yellow-600'></span>

          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='px-5 py-4 m-2 rounded-[4px] bg-[#333] h-12 w-80 outline-none text-white'
          />
          <button
            type='submit'
            disabled={isLoading}
            onClick={handelFormSubmit}
            className='m-2 h-12 w-80 mt-6 hover:bg-[rgb(193,17,25)] bg-[#e50914] rounded-[4px] text-white font-bold cursor-pointer disabled:bg-[#a8373d] '
          >
            {isLoading
              ? "Please Wait..."
              : isSignInFrom
              ? "Sign In"
              : "Sign Up"}
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
              onClick={() => {
                setIsSignInFrom(!isSignInFrom);
                setErrorMessage(null);
              }}
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
