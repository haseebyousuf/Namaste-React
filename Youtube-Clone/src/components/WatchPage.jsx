import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar, toggleSidebar } from "../state/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log();
  useEffect(() => {
    dispatch(closeSidebar());

    return () => {
      dispatch(toggleSidebar());
    };
  }, []);
  return (
    <div className='px-5 py-1'>
      <iframe
        width='950'
        height='500'
        src={"https://www.youtube.com/embed/" + params.get("v")}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
