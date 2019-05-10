import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Data from "../data";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  areaContent: {
    height: "100%",
    marginTop: 64
  },
  paper: {
    padding: theme.spacing(3, 2)
  },
  // content: {
  //   fontFamily: theme.typography.fontFamilyChinese
  // },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    areaContent: {
      marginTop: 56
    }
  }
}));

const areasData = {};
areasData["Entrance"] = Data[0];
areasData["PolarGallery"] = Data[1];
areasData["ThreeMost"] = Data[2];
areasData["RemoteSensing"] = Data[3];
areasData["ResearchInno"] = Data[4];
areasData["GreenGallery"] = Data[5];

export default props => {
  const classes = useStyles();
  const { match } = props;
  const area = match.params.area;
  console.log(area);
  const label = (
    <Box m={3}>
      <Typography align="center" variant="h3" component="h3">
        {areasData[area].label}
      </Typography>
    </Box>
  );
  const content = areasData[area].content.map(item => {
    return (
      <Fragment>
        <Box mt={3} mb={1}>
          <Typography variant="h4" component="h4">
            {item.title}
          </Typography>
        </Box>
        <Typography component="p">
          {item.info === undefined
            ? ""
            : item.info.map(subinfo => {
                return subinfo.notes.map(note => {
                  return note;
                });
              })}
        </Typography>
      </Fragment>
    );
  });

  return (
    <div className={classes.areaContent}>
      <Paper className={classes.paper}>
        {label}
        {content}
      </Paper>
    </div>
  );
};
