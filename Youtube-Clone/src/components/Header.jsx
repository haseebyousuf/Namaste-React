import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className='flex items-center justify-between px-2 text-black'>
      <div>
        <img className='w-32' src={logo} alt='logo' />
      </div>
      <div className='flex'>
        {/* <form className='flex'> */}
        <input
          className='p-2 border-2 rounded-l-full w-96 border-grey-400'
          type='text'
          placeholder='Search...'
        />
        <button className='px-2 bg-gray-200 border-2 border-l-0 rounded-r-full border-grey-400'>
          🔍
        </button>
        {/* </form> */}
      </div>
      <div>
        <img
          src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
          alt='profile'
          className='w-10 rounded-full'
        />
      </div>
    </div>
  );
};

export default Header;
