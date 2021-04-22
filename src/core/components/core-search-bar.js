import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
}));

const CoreSearchBar = (props) => {
  const classes = useStyles();

  return (
    <Autocomplete
      id="combo-box-demo"
      classes={classes}
      options={props.searchData}
      disableClearable
      forcePopupIcon={false}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
            placeholder="Search for a fridge"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "#b0b3bc" }} />
                </InputAdornment>
              ),
            }}
          />
        );
      }}
      searchData={props.searchData}
    />
  );
};

export default CoreSearchBar;