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
  return (
    <Fragment>
      {/* <LeftDrawer
        links={isLoggedIn ? privateLinks : publicLinks}
        isOpen={showLeftDrawer}
        handleCloseMenu={toggleMenu}
      /> */}
      {/* <Header handleOpenMenu={toggleMenu} /> */}
      {/* <Main /> */}
      {/* <SwipeableViews
        className={classes.swipeable}
        containerStyle={{ height: "100%" }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={showTab}
        onChangeIndex={handleChangeIndex}
      > */}
      <Hero />
      {/* <Areas /> */}
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
