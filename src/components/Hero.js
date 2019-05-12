import React, { Fragment } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../img/bg-2.jpg";
import Header from "../layouts/Header";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
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
    marginTop: theme.spacing(5)
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    heroContent: {
      padding: theme.spacing(14, 0, 0)
    }
  }
}));

export default props => {
  const { toggleMenu } = props;
  const classes = useStyles();
  return (
    <Fragment>

    {/* <Header handleOpenMenu={toggleMenu} title="導覽資料" /> */}

    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          MOCC Learning Assistant
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
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
    </Fragment>
  );
};
