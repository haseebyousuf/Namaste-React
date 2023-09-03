import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import VideosContainer from "./components/VideosContainer";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainContainer />}>
            <Route path='/' element={<VideosContainer />} />
            <Route path='/watch' element={<WatchPage />} />
            <Route
              path='/demo'
              element={
                <>
                  <Demo />
                  <Demo2 />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
