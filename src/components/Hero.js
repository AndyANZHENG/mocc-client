import React, { Fragment } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../img/bg-2.jpg";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroOverlay: {
    background:
      "linear-gradient(0deg,rgba(211,211,211,0.3),rgba(211,211,211,0.3)),url(http://lorempixel.com/800/600/nature/2)",
    backgroundSize: "cover"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(25, 0, 0),

    background: `linear-gradient(0deg,rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(${bg})`,
    // backgroundImage: `url(${bg})`,
    /* Full height */
    height: "100%",
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  heroButtons: {
    marginTop: theme.spacing(8)
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <div className={classes.heroOverlay}> */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            MOCC Learning Assistant
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Check Offcial Site
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Learning Center
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      {/* </div> */}
    </Fragment>
  );
};
