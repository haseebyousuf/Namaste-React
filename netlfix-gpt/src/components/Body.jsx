import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "../state/userSlice";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(login({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(logout());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
