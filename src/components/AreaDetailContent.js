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
                  {content.infos === undefined
                    ? ""
                    : content.infos.map((info,idx) => {
                        return (
                          <Fragment key={idx} >
                          <Box mt={1} mb={1}>
                            <Typography variant="h5" component="h5">
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
                <Box mt={1}>
                    {content.extra_infos === undefined ? (
                      ""
                    ) : (
                      <Fragment>
                        <strong>附加資料:</strong> <br />
                      </Fragment>
                    )}
                    {content.extra_infos === undefined
                      ? ""
                      : content.extra_infos.map((extra_info,idx) => {
                          return (
                          <Fragment key={idx}>
                            <Box mt={1} mb={1}>
                              <Typography variant="h5" component="h5">
                                {extra_info.subtitle === undefined
                                ? ""
                                : extra_info.subtitle
                                }
                              </Typography>
                            </Box>
                          {
                            extra_info.notes.map((note, idx) => {
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
                </Box>
              </Fragment>
            );
          })
          }
    </Fragment>
  )
}