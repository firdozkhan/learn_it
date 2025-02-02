import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
