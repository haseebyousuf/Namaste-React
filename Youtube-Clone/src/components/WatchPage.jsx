import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar, toggleSidebar } from "../state/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

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
      <div className='flex gap-2'>
        <iframe
          width='950'
          height='500'
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <div>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
