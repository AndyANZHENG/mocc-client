import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AreaButtons from "./AreaButtons";
import AreaDetail from "./AreaDetail";
import Quiz from "./Quiz";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  areaContent: {
    height: "100%",
    marginTop: 64
  },
  paper: {
    padding: theme.spacing(3, 2)
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

  return (
    <div className={classes.areaContent}>
      <Switch>
        <Route exact path={`${match.path}/quiz/:area`} component={Quiz} />
        <Route exact path={match.path} render={props => <AreaButtons {...props} type="learning"/>} />
      </Switch>
    </div>
  );
};
