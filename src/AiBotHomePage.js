import React from "react";
import { NavLink } from "react-router-dom";
import "./output.css";

const AiBotHomePage = () => {
  return (
    <div className="w-full h-screen overflow-hidden overflow-y-auto bg-[#1c1c1d] ">
      <div className="w-full">
        <h1 className="text-6xl text-center font-black text-white py-3">
          Ai Tutors
        </h1>
      </div>

      <div className="w-full h-full flex justify-evenly items-center">
        {/* English */}
        <NavLink to="/aibots/english" className="w-[23%] h-[65%] rounded-lg overflow-hidden bg-[#373a3f]">
          <img
            src="https://www.fpacademy.co.in/blog/wp-content/uploads/2022/09/How-to-Learn-English-Speaking-at-Home-960x540-1.jpg"
            className="w-full h-[60%]"
          />
          <div className="p-3">
            <h1 className="text-4xl font-bold text-white">English</h1>
            <p className="mt-1 font-semibold text-zinc-300">
              English AI Tutor is an advanced learning tool designed to assist
              users in mastering the English language efficiently and
              effectively. Leveraging state-of-the-art artificial intelligence
              technology, it offers personalized learning experiences
            </p>
          </div>
        </NavLink>
        {/* History */}
        <NavLink to="/aibots/history" className="w-[23%] h-[65%] rounded-lg overflow-hidden bg-[#373a3f]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7325yKBtMta0hPD68mGEVvcmWHZ9bp0DLgp_E9lPjg&s"
            className="w-full h-[60%]"
          />
          <div className="p-3">
            <h1 className="text-4xl font-bold text-white">History</h1>
            <p className="mt-1 font-semibold text-zinc-300">History AI Tutor is an advanced learning companion designed to enrich students' understanding of historical events, cultures, and civilizations. Powered by artificial intelligence.</p>
          </div>
        </NavLink>
        {/* {Science} */}
        <NavLink to="/aibots/science" className="w-[23%] h-[65%] rounded-lg overflow-hidden bg-[#373a3f]">
          <img
            src="https://yt3.googleusercontent.com/Tr7gF21cPkMGvHk1izOnYipPkdstBCwr1-1jScSkbi2LaIKv3SYS402RpywleQciEckuWyIFrg=s176-c-k-c0x00ffffff-no-rj"
            className="w-full h-[60%]"
          />
          <div className="p-3">
            <h1 className="text-4xl font-bold text-white">Science</h1>
            <p className="mt-1 font-semibold text-zinc-300">Science AI Tutor is an intelligent learning tool designed to enhance students' understanding of scientific concepts across various disciplines. Using cutting-edge artificial intelligence technology.</p>
          </div>
        </NavLink>
        {/* {Maths} */}
        <NavLink to="/aibots/maths" className="w-[23%] h-[65%] rounded-lg overflow-hidden bg-[#373a3f]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6d_Et64AVGXDtRyYpUgYp_vN5ZTUq1GUjUor9IPgnWGnPCcaYKoLM9UouFU4uIjoMppI&usqp=CAU"
            className="w-full h-[60%]"
          />
          <div className="p-3">
            <h1 className="text-4xl font-bold text-white">Math</h1>
            <p className="mt-1 font-semibold text-zinc-300">Maths AI Tutor is a cutting-edge educational tool engineered to support students in mastering mathematical concepts with ease. </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default AiBotHomePage;
