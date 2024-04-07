import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { selectUser } from './features/userSlice';
import Chat from "./Chat";
import { useSelector, } from "react-redux";
import "./chatPage.css"
import Login from "./Login";

const ChatPage = () => {
    const user = useSelector(selectUser)
    useEffect(()=>{

    },[user]);
  return user ? (
    <div className="zamn">
      <Sidebar />
      <Chat />
    </div>
  ) : <Login />;
};

export default ChatPage;
