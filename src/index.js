import React from "react";
import ReactDOM from "react-dom";
import Landing from "./Landing";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function App() {
  return <Landing />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.register();
