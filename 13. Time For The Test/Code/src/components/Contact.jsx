import React from "react";

const Contact = () => {
  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-3xl my-4'> Contact Us</h1>
      <form className='flex items-center flex-col'>
        <input
          className='p-2 m-2 border border-black rounded-lg'
          placeholder='Name'
        />
        <input
          className='p-2 m-2 border border-black rounded-lg'
          placeholder='Message'
        />
        <button className='p-2 m-2 bg-slate-200 rounded-lg'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
