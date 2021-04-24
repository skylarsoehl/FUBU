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

const useStyles = makeStyles((start) => ({
    root: {
      minWidth: 275,
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        selectEmpty: {
          marginTop: theme.spacing(2)
        },
        select: {
          height: "10vh"
        },
            },
    //   alignItems: "center",
    },
    pos: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    control: {
        padding: theme.spacing(3),
    },
  }));
  


  const FridgeMaintenanceForm = props => {
    document.body.style.backgroundColor = "#E5E5E5";
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    //   };

    function DropdownSelect() {
      const OptCheckbox = <MenuItem><CheckBoxIcon />Checkboxes</MenuItem>;
      const OptShortAnswer = <MenuItem><ShortTextIcon />Short Answer</MenuItem>;
      const OptLongAnswer = <MenuItem><SubjectIcon />Long Answer</MenuItem>;
      const OptDropdown = <MenuItem><ArrowDropDownIcon />Dropdown</MenuItem>;
      const OptMultipleChoice = <MenuItem><RadioButtonCheckedIcon />Multiple Choice</MenuItem>;
      const OptImage = <MenuItem><AttachFileIcon />Image</MenuItem>;

      var FormType = [OptCheckbox, OptShortAnswer, OptLongAnswer, OptDropdown, OptMultipleChoice, OptImage];
      
        return (

          <CoreSelect className={classes.root} optionLists={FormType}/>
        );
      }
    
    return (
        
        <Container maxWidth="md">

          {/* main grid, columns */}
          <Grid
            container
            className={classes.root}
            direction="column"
            justify="center"
            alignItems="left"
            style={{ minHeight: '100vh' }}
            spacing={3}>
              

              <Grid container item>
                  <Typography variant="h5">What do you want to name this fridge check-in form?</Typography>
              </Grid>
              

              {/* title + publish form */}
              <Grid container item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center">
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Title" color="#FFFFFF" variant="outlined" size="small"/>
                    </form>
                    <Button variant="contained" color="primary">Publish Form</Button>
                </Grid>
              </Grid>
              
              <Card className={classes.root} elevation={3}>
                <CardContent>
              {/* new item section1 */}
              <Grid container item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start">
                    <div><Typography>Item 1</Typography></div>
                    <div><Typography>Question Type</Typography></div>
                    <AttachFileIcon fontSize="large"/>
              </Grid>

              {/* new item section2 */}
                <Grid
                  container
                  direction="row"
                  // justify="space-evenly"
                  alignItems="flex-start">
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField id="outlined-basic" label="Title" variant="outlined" size="small"/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </form>
                    <DropdownSelect className={classes.root}/>
              </Grid>

              {/* new item details */}
                <Grid
                  container>
                    {/* <Checkbox disabled size='medium'/> */}
                    <TextField id="outlined-basic" fullWidth margin="normal" label="answer option" />
                </Grid>

              {/* required? */}
              {/* <Grid container item> */}
                <Grid
                  container
                  justify="flex-end"
                  alignItems="center">
                    required? &nbsp;&nbsp;<CoreSwitch/><DeleteOutlineIcon fontSize="large"/>
                </Grid>
              </Grid>
              
              </CardContent></Card>
              <Grid container item>
              <Grid container justify="center">+ add new item</Grid>
              </Grid>
              </Grid>

              
          </Container>
        
    );
    
  }

  export default FridgeMaintenanceForm;
  
