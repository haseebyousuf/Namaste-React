import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../state/userSlice";

const Body = () => {
  const isAuth = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(login({ uid, email, displayName }));
        // ...
      } else {
        dispatch(logout());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: isAuth ? <Navigate to='/browse' /> : <Login />,
    },
    {
      path: "/browse",
      element: isAuth ? <Browse /> : <Navigate to='/' />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
