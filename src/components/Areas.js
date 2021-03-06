import React, { useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AreaButtons from "./AreaButtons";
import AreaDetail from "./AreaDetail";
import Header from "../layouts/Header";
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
  const { match, toggleMenu } = props;
  const classes = useStyles();

  return (
    <Fragment>
    {/* <Header handleOpenMenu={toggleMenu} title="導覽資料" /> */}
    <div className={classes.areaContent}>
      <Switch>
        <Route exact path={match.path} render={props => <AreaButtons {...props} type="info"/>} />
        <Route path={`${match.path}/:area`} component={AreaDetail} />
      </Switch>
    </div>
    </Fragment>
  );
};
