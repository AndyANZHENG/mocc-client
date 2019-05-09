import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  footerUnit: {
    height: "auto",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "red",
    color: "white",
    textAlign: "center"
  }
}));

export default props => {
  const classes = useStyles();
  const labels = props.labels;
  const tabs = labels.map(label => <Tab key={label.id} label={label} />);

  return (
    <div className={classes.footerUnit}>
      <Paper square className={classes.root}>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          {tabs}

          {/* <Tab icon={<PhoneIcon />} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" /> */}
        </Tabs>
      </Paper>
    </div>
  );
};
