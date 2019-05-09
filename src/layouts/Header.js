import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sticky: {
    position: "fixed",
    top: 0,
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          onClick={props.handleOpenMenu}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          MOCC
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
