import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CoreSelect = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState('');


  const handleChange = (event) => {
    const name = event.target.value;
    setState({option : name});
  };

  return (
    <FormControl className={classes.formControl}>
      {/* <InputLabel>{state.option}</InputLabel> */}
      <Select value={state.option} onChange={handleChange}>
        {props.optionLists.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    
    // <Select
    //   labelId="demo-simple-select-filled-label"
    //   id="demo-simple-select-filled"
    //   options={props.optionList}
    //   variant="outlined"
    //   optionList={props.optionList}
    //     >
    //       {/* <MenuItem value="">AHHHHHHH</MenuItem>
    //       <MenuItem value={20}>Twenty</MenuItem>
    //       <MenuItem value={30}>Thirty</MenuItem> */}
    // </Select>

  );
}

export default CoreSelect;