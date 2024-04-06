import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import ollama from "ollama";
import O from './node_modules/ollama/dist/index.mjs';


const History = () => {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    {
      text: "Hello, I am your history teacher here to answer your all doubts realated to history 24/7. I am trained by Firdoz, Tejas, Suyog and Atharva",
      isBot: true,
    },
  ]);
  async function fetchData() {
    const text = input;
    setInput("");
    setMessage([...messages, { text: text, isBot: false }]);
    const response = await ollama.chat({
      model: "history",
      messages: [{ role: "user", content: text }],
    });
    console.log(response);
    setMessage([
      ...messages,
      { text: text, isBot: false },
      { text: response.message.content, isBot: true },
    ]);
  }
  return (
    <div className="w-full h-screen bg-[#242630] flex">
      {/* Side Section */}
      <div className="w-[22%] h-full border-r border-r-zinc-400 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-10 mt-4">
          <h1 className="text-5xl font-semibold text-zinc-300">History</h1>
          <div className="w-[85%] bg-[#16191F] rounded-lg p-2">
            <h3 className="text-zinc-400 font-bold text-2xl">Apollo</h3>
            <p className="text-zinc-500 font-semibold text-sm">
              Hello, my dear students I am your history teacher. I will teach you
              each and every concept of histroy in details and I am sure that
              you will love my way of teaching.
            </p>
          </div>
        </div>

        <div className="w-full text-center">
          <ul>
            <li className="font-semibold text-zinc-400 mb-3">About</li>
            <li className="font-semibold text-zinc-400 mb-3">Contact</li>
            <li className="font-semibold text-zinc-400 mb-3">Home</li>
          </ul>
        </div>
      </div>

      {/* Hero Section  */}
      <div className="w-[78%] h-full flex flex-col items-center justify-between py-4">
        {/* Chat section */}
        <div className="w-[80%] overflow-hidden overflow-y-auto scroll-smooth">
          {messages.map((message, index) => (
            <div
              key={index}
              className="w-full bg-[#16191F] mb-2 flex justify-start items-center px-2 py-3 rounded-md"
            >
              <img
                src={
                  message.isBot
                    ? "https://blog.bismart.com/hubfs/Imported_Blog_Media/los-10-mejores-bots-disponibles-en-Internet-Sep-26-2023-08-53-22-8616-AM.jpg#keepProtocol"
                    : "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
                }
                className="w-16 h-16 object-cover rounded-lg mr-2"
                alt=""
              />
              <p className="text-zinc-300 text-sm font-semibold">
                {message.text}
              </p>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="w-[80%] py-3 px-4 rounded-md bg-[#16191F] flex items-center">
          <input
            type="text"
            placeholder="Ask a question"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
            className="border-none outline-none bg-[#16191F] w-full text-zinc-200"
          />
          <button
            type="submit"
            className="text-zinc-200 text-xl"
            onClick={fetchData}
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;