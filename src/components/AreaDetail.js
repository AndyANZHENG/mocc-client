import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Data from "../response2";
import Box from "@material-ui/core/Box";
import axios from "axios";

const APIurl = "https://l9pl3y2q7z.sse.codesandbox.io/api/data";

const useStyles = makeStyles(theme => ({
  areaDetail: {
    padding: theme.spacing(3, 2)
  },
  paperDetail: {
    padding: theme.spacing(3, 2)
  }
}));

// const areasData = {};
// areasData["Entrance"] = Data[0];
// areasData["PolarGallery"] = Data[1];
// areasData["ThreeMost"] = Data[2];
// areasData["RemoteSensing"] = Data[3];
// areasData["ResearchInno"] = Data[4];
// areasData["GreenGallery"] = Data[5];

export default props => {
  const [detail, setDetail] = useState({
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
        setDetail({ data: response.data, isLoaded: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const area = match.params.area;
  console.log(area);
  console.log(detail);
  const label = (
    <Box m={3}>
      {detail.isLoaded === true ? (
        <Typography align="center" variant="h3" component="h3">
          {detail.data[area].label}
        </Typography>
      ) : (
        "loading..."
      )}
    </Box>
  );
  const content = (
    <Fragment>
      {detail.isLoaded === true
        ? detail.data[area].content.map(item => {
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
                          return (
                            <Fragment>
                              > {note}
                              <br />
                            </Fragment>
                          );
                        });
                      })}
                </Typography>
                <Box mt={1}>
                  <Typography component="p" variant="body1">
                    {item.extra_info === undefined ? (
                      ""
                    ) : (
                      <Fragment>
                        <strong>附加資料:</strong> <br />
                      </Fragment>
                    )}
                    {item.extra_info === undefined
                      ? ""
                      : item.extra_info.map(subinfo => {
                          return subinfo.notes.map(note => {
                            return (
                              <Fragment>
                                - {note}
                                <br />
                              </Fragment>
                            );
                          });
                        })}
                  </Typography>
                </Box>
              </Fragment>
            );
          })
        : "loading..."}
    </Fragment>
  );

  return (
    <div className={classes.areaDetail}>
      <Paper className={classes.paperDetail}>
        {label}
        {content}
      </Paper>
    </div>
  );
};
