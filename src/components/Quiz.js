import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  quiz: {
    height: "100%",
    width: "100%",
  }
}));


export default props => {
  const classes = useStyles();
  const { match } = props;
  const area = match.params.area;
  console.log(match.path);
  console.log(area);
  
  function quiz(area){
      switch(area) {
        case 'PolarGallery':
          return <iframe className={classes.quiz} src="https://docs.google.com/forms/d/e/1FAIpQLSe6MuKKBoBVUPvQ1oHA6jlyAMz7lvdJTqwl7gfhYuB8i2yvIw/viewform?embedded=true">Loading...</iframe>
        case 'RemoteSensing':
          return <iframe className={classes.quiz} src="https://docs.google.com/forms/d/e/1FAIpQLSe6MuKKBoBVUPvQ1oHA6jlyAMz7lvdJTqwl7gfhYuB8i2yvIw/viewform?embedded=true">Loading...</iframe>
        case 'ResearchInno':
          return <iframe className={classes.quiz} src="https://docs.google.com/forms/d/e/1FAIpQLSe6MuKKBoBVUPvQ1oHA6jlyAMz7lvdJTqwl7gfhYuB8i2yvIw/viewform?embedded=true">Loading...</iframe>
        case 'GreenGallery':
          return <iframe className={classes.quiz} src="https://docs.google.com/forms/d/e/1FAIpQLSe6MuKKBoBVUPvQ1oHA6jlyAMz7lvdJTqwl7gfhYuB8i2yvIw/viewform?embedded=true">Loading...</iframe>
        default:
          return "No quiz found";
      }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      {quiz(area)}
    </Fragment>
  );
}