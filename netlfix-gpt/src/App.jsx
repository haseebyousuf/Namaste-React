import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./state/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./scenes/Browse";

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
