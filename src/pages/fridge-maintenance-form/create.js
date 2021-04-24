import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import theme from '/Users/nesannetam/Documents/spring21/FUBU/src/theme.js';

const useStyles = makeStyles((start) => ({
    root: {
      minWidth: 275,
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    //   alignItems: "center",
    },
    pos: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12,
        marginBottom: 12,
    },
    control: {
        padding: theme.spacing(2),
    },
  }));
  


  const CoreBox = props => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    //   };
    
  
    return (
    <Container maxWidth="md">
    
      <Grid
        container
        // direction="column"
        alignItems="left"
        justify="space-between"
        style={{ minHeight: '100vh' }}
        spacing={3}
        >
            
        <Typography variant="h1">What do you want to name this fridge check-in form?</Typography>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Title" variant="outlined" size="small"/>
            <Button variant="contained" color="primary">
                      Publish Form
                    </Button>
            </form>
          {/* <Grid item xs={3}> */}
            <div class="container4">
              <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h1">
                      Item 1 Question Type
                    </Typography>
                    <br />
                    <Typography variant="p">
                    <TextField id="outlined-basic" label="Write your question here." variant="outlined" size="small"/>
                    <FormControl variant="outlined" className={classes.root} size="small">
                    <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // onChange={handleChange}                   
                     >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem>Checkbox</MenuItem>
                    <MenuItem>Short Answer</MenuItem>
                    <MenuItem>Long Answer</MenuItem>
                    <MenuItem>Dropdown</MenuItem>
                    <MenuItem>Images</MenuItem>
                    </Select>
                      <br />
                      </FormControl>
                    </Typography>
                  </CardContent>
                <CardActions>
                    {/* <Button variant="contained" color="secondary">
                      Skip for now
                    </Button> */}
                </CardActions>
              </Card>
              </div>
        </Grid>
        {/* </Grid> */}
        </Container>
    );
    
  }

  export default CoreBox;
  
