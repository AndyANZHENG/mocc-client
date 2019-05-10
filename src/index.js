import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Header, withBase } from "./layouts";
import {
  Hero,
  LeftDrawer,
  Areas,
  ProtectedRoute,
  Login,
  AreaDetail
} from "./components";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  swipeable: {
    height: "100%"
  }
}));

function App() {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showTab, setShowTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [content, setContent] = useState("Hero");

  const toggleMenu = () => {
    if (showLeftDrawer === true) {
      setShowLeftDrawer(false);
    } else {
      setShowLeftDrawer(true);
    }
  };

  function handleChangeIndex(index) {
    setShowTab(index);
  }

  function handleChange(event, newValue) {
    setShowTab(newValue);
  }

  const publicLinks = [
    {
      id: 0,
      url: "/learning-center",
      label: "Learning Center",
      icon: "fas fa-user-graduate"
    },
    {
      id: 1,
      url: "/login",
      label: "Log In",
      icon: "fab fa-google"
    }
  ];
  const privateLinks = [
    {
      // id: 0,
      url: "/",
      label: "Home",
      icon: "fas fa-home"
    },
    {
      // id: 0,
      url: "/learning-center",
      label: "Learning Center",
      icon: "fas fa-user-graduate"
    },
    {
      // id: 1,
      url: "/areas",
      label: "Tour Guide Info",
      icon: "fas fa-file-alt"
    },
    {
      // id: 2,
      url: "/logout",
      label: "Log out",
      icon: "fas fa-sign-out-alt"
    }
  ];

  return (
    <BrowserRouter>
      <LeftDrawer
        links={isLoggedIn ? privateLinks : publicLinks}
        isOpen={showLeftDrawer}
        handleCloseMenu={toggleMenu}
      />
      <Header handleOpenMenu={toggleMenu} />
      <Switch>
        <ProtectedRoute
          isLoggedIn={isLoggedIn}
          path="/areas"
          component={Areas}
        />
        {/* <ProtectedRoute
          isLoggedIn={isLoggedIn}
          path="/areas/:area"
          exact
          component={withRouter(Areas)}
        /> */}

        <Route path="/" exact component={Hero} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>

    // <Landing />
  );
}

const MyApp = withBase(App);
const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);

serviceWorker.register();
