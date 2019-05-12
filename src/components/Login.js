import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Icon, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import clsx from "clsx";
import { withSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';

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

function Login(props) {
  useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  });
  // const [redirect, setRedirect] = useState(false);
  const { toggleLogin } = props;
  const classes = useStyles();
  const handleClick = variant => () => {
    // variant could be success, error, warning, info, or default
    props.enqueueSnackbar('Login Successed!', { variant });
    props.history.push(`/`)
    toggleLogin();
  }

  // const renderRedirect = () => {
  //   if (redirect) {
  //     props.history.push(`/target`)
  //   }
  // }

  return (
    <div className={classes.loginContent}>
      {/* {renderRedirect} */}
      <Paper className={classes.root}>
        {/* <Typography variant="h5" component="h3">
          We only support logging in with Google now.
        </Typography> */}
        {/* <Box mt={1}>
          <Typography component="p">
            More login functions might be supported in the future.
          </Typography>
        </Box> */}
        <Button onClick={handleClick('success')} variant="contained" color="primary" className={classes.button}>
          <Icon className={clsx(classes.icon, "fab fa-google")} />
          Login
           {/* with Google */}
        </Button>
      </Paper>
    </div>
  );
};

export default withSnackbar(Login);
