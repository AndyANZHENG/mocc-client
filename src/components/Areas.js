import React from "react";
import { Container, Typography, Grid, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AreaButtons from "./AreaButtons";
import AreaDetail from "./AreaDetail";
import { Route, Switch } from "react-router-dom";

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

export default props => {
  const { match } = props;
  const classes = useStyles();
  console.log(match.path);
  return (
    <div className={classes.areaContent}>
      <Paper className={classes.paper}>
        {/* <Container maxWidth="md"> */}
        <Switch>
          <Route path={`${match.path}/:area`} component={AreaDetail} />
          <Route exact path={match.path} component={AreaButtons} />
        </Switch>

        {/* </Container> */}
      </Paper>
    </div>
  );
};
