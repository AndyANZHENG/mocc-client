import { Link, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

export default props => {
  return (
    <footer>
      <Typography variant="overline" align="center" gutterBottom>
        Weekend Warrior
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <MadeWithLove />
    </footer>
  );
};
