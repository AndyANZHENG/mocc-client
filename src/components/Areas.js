import React from "react";
import { Container, Typography, Grid, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AreaButtons from "./AreaButtons";

const useStyles = makeStyles(theme => ({
  areaContent: {
    height: "100%",
    marginTop: 64
  },
  paper: {
    padding: theme.spacing(0, 0)
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    areaContent: {
      marginTop: 56
    }
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.areaContent}>
      <Paper className={classes.paper}>
        {/* <Container maxWidth="md"> */}
        <AreaButtons />
        {/* </Container> */}
      </Paper>
    </div>
  );
};
