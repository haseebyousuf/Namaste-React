import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-2/12 mr-3 overflow-clip'>
      <div className='p-2 border-b border-gray-400'>
        <li className='w-full list-none'>
          <button
            onClick={() => navigate("/")}
            className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200'
          >
            Home
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Shorts
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Subscriptions
          </button>
        </li>
      </div>
      <div className='p-2 border-b border-gray-400'>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Library
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            History
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Watch Later
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Liked Videos
          </button>
        </li>
      </div>
      <div className='p-2 border-b border-gray-400'>
        <h2 className='font-bold'>Subscriptions</h2>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            One
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Two
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Three
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Four
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Five
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Five
          </button>
        </li>
        <li className='w-full list-none'>
          <button className='w-full px-3 py-2 rounded-lg text-start hover:bg-slate-200 '>
            Five
          </button>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
