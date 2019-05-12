import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default props => {
  const [form, setForm] = useState(props.detail)
  console.log(form);

  const handleChange = (idx, {name}) => e => {
    // const contentsUpdate = {
    //   ...form,
    //   contents: [
    //     ...form.contents,
    //     form.contents[idx]:""
    //   ]
    // }
    // // setForm({...form, contents[idx][name]:e.target.value});
    // console.log(form);
  }

  return (
    <form noValidate autoComplete="off">
      {
        form.contents.map((content, idx) => {
            return (
              <Fragment key={idx}>
                <Box mt={3} mb={1}>
                  <Typography variant="h4" component="h4">
                  <TextField
                    id={`subtitle-${idx}`}
                    label="title"
                    // className={classes.textField}
                    value={content.title}
                    onChange={handleChange(idx, {name:"title"})}
                    margin="normal"
                    variant="filled"
                  />
                    
                  </Typography>
                </Box>
                <Typography component="p">
                  {content.infos === undefined
                    ? ""
                    : content.infos.map(info => {
                        return info.notes.map((note, idx)=> {
                          return (
                            <Fragment key={idx}>
                              > {note}
                              <br />
                            </Fragment>
                          );
                        });
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
          }
    </form>
  )
}