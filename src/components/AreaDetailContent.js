import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default props => {
  return (
  <Fragment>
      {
        props.detail.contents.map((content,idx) => {
            return (
              <Fragment key={idx}>
                <Box mt={3} mb={1}>
                  <Typography variant="h4" component="h4">
                    {content.title}
                  </Typography>
                </Box>
                <Typography component="p">
                  {content.infos === undefined
                    ? ""
                    : content.infos.map((info,idx) => {
                        return (
                          <Fragment>
                                            <Box mt={1} mb={1}>

                          <Typography key={idx} variant="h5" component="h5">
                            {info.subtitle === undefined
                            ? ""
                            : info.subtitle
                            }
                          </Typography>
                          </Box>
                          {
                            info.notes.map((note, idx) => {
                                return (
                                  <Fragment key={idx}>
                                    > {note}
                                    <br />
                                  </Fragment>
                                );
      
                              })
                          }
                          </Fragment>
                        )
                      })}
                </Typography>
                <Box mt={1}>
                  <Typography component="p" variant="body1">
                    {content.extra_infos === undefined ? (
                      ""
                    ) : (
                      <Fragment>
                        <strong>附加資料:</strong> <br />
                      </Fragment>
                    )}
                    {content.extra_infos === undefined
                      ? ""
                      : content.extra_infos.map(extra_info => {
                          return extra_info.notes.map((note, idx) => {
                            return (
                              <Fragment key={idx}>
                                > {note}
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
          }
    </Fragment>
  )
}