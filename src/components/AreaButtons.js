import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Entrance from "../img/areas/entrance.png";
import ThreeMost from "../img/areas/three_most.png";
import PolarGallery from "../img/areas/polar_gallery.png";
import RemoteSensing from "../img/areas/remote_sensing.png";
import ResearchInno from "../img/areas/research_innovation.png";
import GreenGallery from "../img/areas/green_gallery.png";
import { Link as RouterLink } from "react-router-dom";

const info_images = [
  {
    url: Entrance,
    title: "博物館入口",
    width: "50%",
    link: "Entrance"
  },
  {
    url: PolarGallery,
    title: "極地廊",
    width: "50%",
    link: "PolarGallery"
  },
  {
    url: ThreeMost,
    title: "三極區",
    width: "50%",
    link: "ThreeMost"
  },
  {
    url: RemoteSensing,
    title: "衛星遙感及環境監測",
    width: "50%",
    link: "RemoteSensing"
  },
  {
    url: ResearchInno,
    title: "中文大學創新研究",
    width: "50%",
    link: "ResearchInno"
  },
  {
    url: GreenGallery,
    title: "香港賽馬會環保天地",
    width: "50%",
    link: "GreenGallery"
  }
];

const learning_images = [
  {
    url: PolarGallery,
    title: "極地廊",
    width: "50%",
    link: "quiz/PolarGallery"
  },
  {
    url: RemoteSensing,
    title: "衛星遙感及環境監測",
    width: "50%",
    link: "quiz/RemoteSensing"
  },
  {
    url: ResearchInno,
    title: "中文大學創新研究",
    width: "50%",
    link: "quiz/ResearchInno"
  },
  {
    url: GreenGallery,
    title: "香港賽馬會環保天地",
    width: "50%",
    link: "quiz/GreenGallery"
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
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important" // Overrides inline-style
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
        backgroundColor: theme.palette.primary.main
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
    opacity: 0.7,
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
  const { match, type } = props;
  console.log(type);
  const images = type === "info" ? info_images : learning_images;

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
