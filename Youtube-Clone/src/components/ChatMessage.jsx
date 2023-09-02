import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center gap-2 p-2 shadow-md rounded-lg flex-wrap'>
      <img
        src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
        alt='profile'
        className='w-6 rounded-full '
      />
      <span className='font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
