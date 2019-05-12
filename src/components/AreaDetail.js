import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import AreaDetailContent from "./AreaDetailContent";

const APIurl = "https://l9pl3y2q7z.sse.codesandbox.io/api/data";

const useStyles = makeStyles(theme => ({
  areaDetail: {
    padding: theme.spacing(3, 2)
  },
  paperDetail: {
    padding: theme.spacing(3, 2)
  }
}));

export default props => {
  const [details, setDetails] = useState({
    isLoaed: false,
    data: {}
  });
  const classes = useStyles();
  const { match } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(APIurl)
      .then(function(response) {
        console.log(response);
        setDetails({ data: response.data, isLoaded: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const area = match.params.area;
  console.log(area);
  console.log(details);
  console.log(match.path);
  const label = (
    <Box m={3}>
      {details.isLoaded === true ? (
        <Typography align="center" variant="h3" component="h3">
          {details.data[area].label}
        </Typography>
      ) : (
        "loading..."
      )}
    </Box>
  );
  
  // const main = (
    
  // )

  return (
    <div className={classes.areaDetail}>
      <Paper className={classes.paperDetail}>
        {label}
        {details.isLoaded === true ?
        <Switch>
          {/* <Route path={`${match.path}/edit`} render={props => <AreaDetailForm {...props} detail={details.data[area]}/>} /> */}
          <Route path={match.path} render={props => <AreaDetailContent {...props} detail={details.data[area]}/>} />
        </Switch>
        :
          "loading..."
        }
      </Paper>
    </div>
  );
};
