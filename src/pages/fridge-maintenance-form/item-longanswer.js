import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import theme from '/Users/nesannetam/Documents/spring21/FUBU/src/theme.js';
import CoreSelect from '../../core/components/core-select.js';
import CoreSwitch from '../../core/components/core-switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import MenuItem from '@material-ui/core/MenuItem';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Hidden } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      '& .MuiTextField-root': {
        // margin: theme.spacing(1),
        selectEmpty: {
          marginTop: theme.spacing(2)
        },
        select: {
          height: "10vh"
        },
            },
    //   alignItems: "center",
    },
    text: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        fontWeight: 400,
    },
    control: {
        padding: theme.spacing(3),
    },
    newItemButton: {
      fontColor: theme.palette.text.secondary,
    },
  }));

  const DropdownSelect = () => {
    const OptCheckbox = <MenuItem><CheckBoxIcon />Checkboxes</MenuItem>;
    const OptShortAnswer = <MenuItem><ShortTextIcon />Short Answer</MenuItem>;
    const OptLongAnswer = <MenuItem><SubjectIcon />Long Answer</MenuItem>;
    const OptDropdown = <MenuItem><ArrowDropDownIcon />Dropdown</MenuItem>;
    const OptMultipleChoice = <MenuItem><RadioButtonCheckedIcon />Multiple Choice</MenuItem>;
    const OptImage = <MenuItem><AttachFileIcon />Image</MenuItem>;
    

    var FormType = [OptCheckbox, OptShortAnswer, OptLongAnswer, OptDropdown, OptMultipleChoice, OptImage];
    
      return (
        <CoreSelect optionLists={FormType}/>
      );
    }

function handleChange() {
    var e = document.getElementById("ddlViewBy");
    var strUser = e.value;  
    
}

export default function ItemShortAns() {
    const classes = useStyles();

    return (

      <Card className={classes.root} elevation={3}>
      <CardContent>
    {/* new item section1 */}
    <Grid container
      direction="column"
      spacing={1}>
    <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center">
          <div><Typography fontWeight>Item 1</Typography></div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          required? &nbsp;&nbsp;<CoreSwitch/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div><Typography>Question Type</Typography></div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button><AttachFileIcon fontSize="large"/></Button>
    </Grid>

    {/* new item section2 */}
      <Grid
        container
        direction="row"
        justify="left"
        alignItems="center">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Write your question here." variant="outlined" size="small"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </form>
          <DropdownSelect className={classes.root} fontSize="small"/>
    </Grid>

    {/* new item details */}
      <Grid
        container
        alignItems="center">
          <TextField id="outlined-basic" fullWidth label="answer goes here" />
      </Grid>

    {/* required? */}
    {/* <Grid container item> */}
      <Grid
        container
        justify="flex-end"
        alignItems="center">
          
          <Button><DeleteOutlineIcon margin="dense" fontSize="large"/></Button>
      </Grid>
      </Grid>
    
    </CardContent></Card>
    );
}