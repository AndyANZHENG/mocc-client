import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Icon, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 2)
  },
  loginContent: {
    marginTop: 56,
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(4, 0, 0, 0)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

export default props => {
  useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  });

  const classes = useStyles();

  return (
    <div className={classes.loginContent}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          We only support logging in with Google now.
        </Typography>
        <Box mt={1}>
          <Typography component="p">
            More login functions might be supported in the future.
          </Typography>
        </Box>
        <Button variant="contained" color="primary" className={classes.button}>
          <Icon className={clsx(classes.icon, "fab fa-google")} />
          Login with Google
        </Button>
      </Paper>
    </div>
  );
};
