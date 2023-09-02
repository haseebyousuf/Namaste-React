import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../state/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Lorem ipsum sandae ",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  });
  return (
    <>
      <h2 className='font-bold'>Live Chat </h2>

      <div className='border-2 border-black p-2 w-[350px] h-[500px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
