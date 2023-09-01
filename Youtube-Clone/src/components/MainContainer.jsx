import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Header from "./Header";
const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  return (
    <>
      <Header />
      <div className='flex'>
        {isSidebarOpen && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};

export default MainContainer;
