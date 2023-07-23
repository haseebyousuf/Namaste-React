import React, { Suspense, lazy, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import userContext from "./utils/userContext";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  const { loggedInUser } = useContext(userContext);
  return (
    <userContext.Provider value={{ loggedInUser }}>
      <div className='mx-12 '>
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
