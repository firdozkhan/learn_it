import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import AiBotHomePage from "./AiBotHomePage";
import History from "./models/History";
import English from "./models/English";
import Science from "./models/Science";
import Maths from "./models/Maths";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aibots" element={<AiBotHomePage />} />
        <Route path="/chats" element={<App />} />
        <Route path="/aibots/english" element={<English />} />
        <Route path="/aibots/history" element={<History />} />
        <Route path="/aibots/science" element={<Science />} />
        <Route path="/aibots/maths" element={<Maths />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
