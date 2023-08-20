import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  return (
    <div className='flex'>
      {isSidebarOpen && <Sidebar />}
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
