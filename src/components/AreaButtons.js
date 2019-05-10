import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import PolarGallery from "../img/areas/polar_gallery.png";
import RemoteSensing from "../img/areas/remote_sensing.png";
import ResearchInno from "../img/areas/research_innovation.png";
import GreenGallery from "../img/areas/green_gallery.png";
import { Link as RouterLink } from "react-router-dom";

const images = [
  {
    url: PolarGallery,
    title: "Polar Gallery",
    width: "50%",
    link: "PolarGallery"
  },
  {
    url: RemoteSensing,
    title: "Remote Sensing and Environmental Monitoring",
    width: "50%",
    link: "RemoteSensing"
  },
  {
    url: ResearchInno,
    title: "Research and Innovation at CUHK",
    width: "50%",
    link: "ResearchInno"
  },
  {
    url: GreenGallery,
    title: "The Hong Kong Jockey Club Green Gallery",
    width: "50%",
    link: "GreenGallery"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    // maxWidth: "100%",
    // maxHeight: "100%",
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important" // Overrides inline-style
      // height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
        color: theme.palette.primary.main
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

const Link = React.forwardRef((props, ref) => (
  <RouterLink {...props} innerRef={ref} />
));

export default props => {
  const classes = useStyles();
  const { match } = props;

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
          component={Link}
          to={`${match.url}/${image.link}`}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
};
