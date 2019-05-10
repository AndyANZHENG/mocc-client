import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Icon,
  ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { loadCSS } from "fg-loadcss/src/loadCSS";

//STYLES
const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

//LIST LINKS
// polyfill required for react-router-dom < 5.0.0
const Link = React.forwardRef((props, ref) => (
  <RouterLink {...props} innerRef={ref} />
));

function ListItemLink(props) {
  const { primary, to, icon } = props;
  return (
    <li>
      <ListItem button component={Link} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

// function SideList(props) {
//   return (

//   )
// }

// LIST
function DrawList(props) {
  useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  });
  //LIST ITEMS
  const classes = useStyles();
  const items = props.links.map(link => (
    <ListItemLink
      onClick={props.handleCloseMenu}
      icon={<Icon className={clsx(classes.icon, link.icon)} color="primary" />}
      key={link.label}
      to={link.url}
      primary={link.label}
    />
  ));

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.handleCloseMenu}
      onKeyDown={props.handleCloseMenu}
    >
      <List>{items}</List>
    </div>
  );
}

//EXPORT DRAWER
export default props => {
  const classes = useStyles();

  return (
    <Drawer open={props.isOpen} onClose={props.handleCloseMenu}>
      <div>
        <IconButton
          className={classes.button}
          onClick={props.handleCloseMenu}
          aria-label="Delete"
        >
          <ArrowBackIcon />
        </IconButton>
      </div>

      <DrawList handleCloseMenu={props.handleCloseMenu} links={props.links} />
    </Drawer>
  );
};
