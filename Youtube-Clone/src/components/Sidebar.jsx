const Sidebar = () => {
  return (
    <div className='w-40 mr-3 overflow-clip'>
      <div className='p-2 border-b border-black'>
        <li className='list-none'>
          <button className='px-3 py-2 '>Home</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Shorts</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Subscriptions</button>
        </li>
      </div>
      <div className='p-2 border-b border-black'>
        <li className='list-none'>
          <button className='px-3 py-2 '>Library</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>History</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Watch Later</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Liked Videos</button>
        </li>
      </div>
      <div className='p-2 border-b border-black'>
        <h2 className='font-bold'>Subscriptions</h2>
        <li className='list-none'>
          <button className='px-3 py-2 '>One</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Two</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Three</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Four</button>
        </li>
        <li className='list-none'>
          <button className='px-3 py-2 '>Five</button>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
