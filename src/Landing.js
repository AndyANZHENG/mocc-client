import React, { Fragment, useState } from "react";
import { Header, withBase } from "./layouts";
import { Hero, LeftDrawer, Areas } from "./components";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  swipeable: {
    height: "100%"
  }
}));

function Landing(props) {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showTab, setShowTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [content, setContent] = useState("Hero");
  const theme = useTheme();
  const classes = useStyles();
  const BottomLabels = ["1", "2", "3"];
  // const TabContainer =

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
      id: 0,
      url: "/learning-center",
      label: "Learning Center",
      icon: "fas fa-user-graduate"
    },
    {
      id: 1,
      url: "/tour-guide",
      label: "Tour Guide Info",
      icon: "fas fa-file-alt"
    },
    {
      id: 2,
      url: "/logout",
      label: "Log out",
      icon: "fas fa-sign-out-alt"
    }
  ];

  return (
    <Fragment>
      <LeftDrawer
        links={isLoggedIn ? privateLinks : publicLinks}
        isOpen={showLeftDrawer}
        handleCloseMenu={toggleMenu}
      />
      <Header handleOpenMenu={toggleMenu} />
      {/* <Main /> */}
      {/* <SwipeableViews
        className={classes.swipeable}
        containerStyle={{ height: "100%" }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={showTab}
        onChangeIndex={handleChangeIndex}
      > */}
      {/* <Hero /> */}
      <Areas />
      {/* </SwipeableViews> */}

      {/* <Tab
        value={showTab}
        handleChange={handleChange}
        labels={BottomLabels}
      /> */}
    </Fragment>
  );
}

export default withBase(Landing);
