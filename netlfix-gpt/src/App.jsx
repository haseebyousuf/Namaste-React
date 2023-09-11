import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./state/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./scenes/Browse";
import Movies from "./scenes/Movies";
import TvShows from "./scenes/TvShows";
import Search from "./scenes/Search";
import Watch from "./scenes/Watch";

function App() {
  const appRouter = createBrowserRouter([
    {
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },

        {
          path: "/movies",
          element: <Movies />,
        },

        {
          path: "/tvShows",
          element: <TvShows />,
        },
        {
          path: "/search",
          element: <Search />,
        },

        {
          path: "/watch/:type/:id",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
