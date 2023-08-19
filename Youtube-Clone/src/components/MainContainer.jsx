import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
