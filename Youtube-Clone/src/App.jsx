import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import VideosContainer from "./components/VideosContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainContainer />}>
            <Route path='/' element={<VideosContainer />} />
            <Route path='/watch' element={<WatchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
