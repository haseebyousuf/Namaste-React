import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";

const Dropdown = () => {
  const name = useSelector((state) => state.user.displayName);
  return (
    <div className='relative inline-block dropdown '>
      <button className='inline-flex items-center font-semibold text-white transition-transform duration-300'>
        <span className=''>
          <img
            className='rounded-[4px] transition-transform duration-300 hover:scale-90'
            src='https://occ-0-4344-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdVyVQ76iuDREwlcbamzBaFydSGzJ-76wTIkKTR4oVWbbERbJkGL_BVQ1zHcRATMF5a8ogBZGWYb03Z_WY5Df-Ax--ImUp0.png?r=201'
          />
        </span>
      </button>
      <ul className='absolute opacity-60 w-40 hidden pt-1 text-white bg-[rgba(0,0,0,.9)] -left-32 dropdown-menu         border-[0.5px] border-white'>
        <li className='text-center'>
          <h1 className='block opacity-100 px-4 py-2 text-sm whitespace-no-wrap bg-[rgba(0,0,0,.9)] rounded-t hover:underline'>
            {name || "username"}
          </h1>
        </li>
        <li className='text-center '>
          <h1
            onClick={() => {
              signOut(auth)
                .then(() => {})
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                  // An error happened.
                  // navigate("/error");
                });
            }}
            className='cursor-pointer block text-sm px-4 py-2 whitespace-no-wrap bg-[rgba(0,0,0,.9)] rounded-t hover:underline'
          >
            Sign out of Netflix
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
