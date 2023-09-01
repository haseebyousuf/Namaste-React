import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../state/appSlice";
import { cacheData } from "../state/searchSlice";
import { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheSearch = useSelector((state) => state.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSuggestions(cacheSearch[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheData({ [searchQuery]: json[1] }));
  };
  const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between px-2 text-black'>
      <div className='flex gap-2'>
        <img
          className='w-10 py-0 cursor-pointer'
          src={menuIcon}
          alt='menu'
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        />

        <img className='w-32 py-0' src={logo} alt='logo' />
      </div>
      <div className='flex'>
        {/* <form className='flex'> */}
        <input
          className='p-2 border-2 rounded-l-full w-96 border-grey-400'
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className='px-2 bg-gray-200 border-2 border-l-0 rounded-r-full border-grey-400'>
          🔍
        </button>
        {showSuggestions && (
          <div className='absolute my-12 bg-white rounded-lg w-96'>
            <ul>
              {suggestions.map((s) => (
                <li key={s} className='p-2 rounded hover:bg-slate-200'>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
