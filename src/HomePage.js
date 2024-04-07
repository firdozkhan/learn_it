import React from "react";
import "./output.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-screen  relative bg-[#1c1c1d]">
      <h1 className="text-6xl absolute left-[280px] top-4 text-white font-black">
        Learn-It!
      </h1>
      <div className="w-full h-full flex gap-5 justify-center items-center">
        <div className="w-[30%] h-[72%] bg-[#373a3f] rounded-lg overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?w=900&t=st=1712438773~exp=1712439373~hmac=0ac235a6d57b1fa835942ba0ff436109afb6d26e272f026c37d65cf49f2590d1"
            className="w-full h-[55%]"
          />
          <div className="p-3">
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              AI Tutors
            </h1>
            <p className="text-zinc-300 font-semibold my-4">
              The AI Tutors in Learn-it! are an intelligent learning tools that
              offers personalized pathways for students. Using advanced AI
              technology, it engages in conversations, provides instant
              feedback, and tailors learning experiences to individual needs.
            </p>
            <a href="http://localhost:5173/"
              
              className="text-xl font-semibold text-white rounded-xl bg-sky-700 hover:bg-sky-500 py-3 px-3"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="w-[30%] h-[72%] bg-[#373a3f] rounded-lg overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?w=1480&t=st=1712439053~exp=1712439653~hmac=7030c991303e69f693692ebf03ccc578aafb1ab45859fbeb13a4d9c7694d75e9"
            className="w-full h-[55%]"
          />
          <div className="p-3">
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Community
            </h1>
            <p className="text-zinc-300 font-semibold my-3">
              Our community in Learn-it! are a vibrant hub where learners and
              educators converge to exchange knowledge and expertise. With a
              diverse array of students proficient in various subjects and
              technologies the platform fosters collaboration and exploration.
            </p>
            <NavLink
              to="/chats"
              className="text-xl font-semibold text-white rounded-xl bg-sky-700 hover:bg-sky-500 py-3 px-3 mt-5"
            >
              Explore
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
