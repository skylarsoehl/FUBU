import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
    //   padding: "2px 4px",
    //   display: "flex",
    //   alignItems: "center",
    //   width: 400,
    },
  }));

  const CoreTimeInput = (props) => {
      const classes = useStyles();

      return (
        <TextField
        id="time"
        label={props.label}
        type="time"
        variant="outlined"
        defaultValue={props.defaultValue}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        InputLabelProps={props.InputLabelProps}
      />
      )

      
  }

  export default CoreTimeInput;
