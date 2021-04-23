import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';
import SignInPic from '../../assets/Fridge-signin-pic.png';
import { ReactComponent as FUBULogo } from '../../assets/fubu_logo.svg';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme';
import { Typography } from '@material-ui/core';

import LearnMoreDialog from './learnmore-modal';
import SignupDialog from './signup-modal';
import LoginDialog from './login-modal';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        paddingTop: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        width: '246px',
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
        marginTop: '15px',
        marginBottom: '15px',
        fontSize: '24px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    },
    linkButton: {
        fontSize: '24px',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        fontWeight: 400,
        marginTop: '15px',
    },
    text: {
        marginTop: '10px',
        marginBottom: '25px',
    }
}));

function SignIn() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item xs={6}>
                    <div>
                        <img src={SignInPic} alt="communityFridge" />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <FUBULogo className={classes.logo}></FUBULogo>
                    </Grid>
                    <Grid className={classes.text} item xs={8}>
                        <Typography variant="h1"> All-in-one platform for community fridges.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <SignupDialog />
                    </Grid>
                    <Grid item xs={12}>
                        <LoginDialog />
                    </Grid>
                    <Grid item xs={12}>
                        <LearnMoreDialog />
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>

    );
}

export default SignIn;