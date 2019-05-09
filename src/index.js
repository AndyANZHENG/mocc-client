import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Landing from "./Landing";
import { Header, withBase } from "./layouts";
import { Hero, LeftDrawer, Areas } from "./components";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function App() {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showTab, setShowTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [content, setContent] = useState("Hero");

  return (
    //   <LeftDrawer
    //   links={isLoggedIn ? privateLinks : publicLinks}
    //   isOpen={showLeftDrawer}
    //   handleCloseMenu={toggleMenu}
    // />
    // <Header handleOpenMenu={toggleMenu} />
    <Landing />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.register();
