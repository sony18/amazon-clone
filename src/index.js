import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalContext from "./context/GlobalContext";
import { initialState } from "./context/reducer";
import reducer from "./context/reducer";

ReactDOM.render(
   <React.StrictMode>
      <GlobalContext initialState={initialState} reducer={reducer}>
         <App />
      </GlobalContext>
   </React.StrictMode>,
   document.getElementById("root")
);
