import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    input: {
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '40px',
        width: '500px',
    },
    miniButtons: {
        width: '143px',
        height: '46px',
        marginBottom: '25px',
        marginLeft: '50px',
        marginRight: '50px',
        fontSize: '24px',
        borderRadius: '8px',
    },
    text: {
        marginTop: '250px',
        marginBottom: '25px',
        textAlign: 'center',
    },
    buttonText: {
        marginTop: '40px',
        marginBottom: '25px',
        textAlign: 'center',
    }
}));



function CreateFridge() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Typography className={classes.text} variant="h1"> What's the name of your <br></br>community fridge?</Typography>
            <Grid container className={classes.root}>
            <TextField className={classes.input} size="large" variant="outlined" />
                <Grid className={classes.buttonText} item xs={12}>
                    <Button className={classes.miniButtons} variant="contained" color="secondary">Back</Button>
                    <Button className={classes.miniButtons} variant="contained" color="primary">Next</Button>
                </Grid>
            </Grid>
        </ThemeProvider>

    );
}

export default CreateFridge;