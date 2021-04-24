import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ReactComponent as FUBULogoSmall } from '../assets/fubu_logo_small.svg'
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Emoji from '../core/components/core-emoji';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(6),
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    bigButtons: {
        width: '420px',
        height: '77px',
        fontWeight: 400,
        marginTop: '15px',
        marginBottom: '25px',
        fontSize: '33px',
        borderRadius: '8px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        borderColor: '#FFB9AE',
        '&:hover': {
            backgroundColor: '#FFB9AE',
        },
        },
        miniButtons: {
            width: '143px',
            height: '46px',
            marginTop: '60px',
            marginBottom: '25px',
            marginLeft: '25px',
            marginRight: '25px',
            fontSize: '24px',
            borderRadius: '8px',
        },
        text: {
            marginTop: '10px',
            marginBottom: '50px',
            textAlign: 'center',
        }
    }));

    

function JoinWorkSpace() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.root} >
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <FUBULogoSmall className={classes.logo}></FUBULogoSmall>
                    </Grid>
                    <Grid className={classes.text} item xs={12}>
                        <Typography variant="h1"> Hi (name we store here)! Are you:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.bigButtons} size="large" variant="outlined" color="default">Creating a workspace <Emoji symbol="🛠" label="wrench" /></Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.bigButtons} size="large" variant="outlined" color="default">Joining a workspace  <Emoji symbol="🤝" label="wrench" /></Button>
                    </Grid>
                    <Grid className={classes.text} item xs={12}>
                        <Button className={classes.miniButtons} variant="contained" color="secondary">Back</Button>
                        <Button className={classes.miniButtons} variant="contained" disabled={"disabled"} color="primary">Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>

    );
}

export default JoinWorkSpace;