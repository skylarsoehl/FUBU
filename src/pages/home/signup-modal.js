import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';
import {TextField} from 'formik-material-ui';
import {Formik, Form, Field} from 'formik';
import Box from '@material-ui/core/Box';

import { useHistory } from 'react-router';



const useStyles = makeStyles((theme) => ({
    button: {
        width: '246px',
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
        marginTop: '15px',
        marginBottom: '25px',
        fontSize: '24px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    },
    input: {
        marginBottom: '22px',
        width: '500px',
    },
    form: {
        width: "552px",
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
    }
}));

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(5),
    },
    title: {
        fontWeight: 600,
        textAlign: 'center',
        paddingTop: '50px',
    },
    body: {
        fontSize: '16px',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: '#251F1C',
    },
});


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.title} {...other}>
            <Typography variant="h1">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        padding: '30px',
    }
}))(MuiDialogContent);

export default function SignupDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [userData, setUserData] = React.useState({});

    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (

        <ThemeProvider theme={theme}>
            <Button className={classes.button} size="large" variant="contained" color="primary" onClick={handleClickOpen}>Sign Up</Button>
            <Dialog justifyContent="center" onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose}>
                    Create your account
                 </DialogTitle>
                <DialogContent>
                <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            passwordConfirm: '',
                            pronouns: '',
                          }}
                          validate={(values) => {
                            const errors = {};

                            if(!values.firstName) {
                                errors.firstName = 'Required';
                            } 
                            
                            if(!values.lastName) {
                                errors.lastName = 'Required';
                            }                           

                            if (!values.email) {
                              errors.email = 'Required';
                            } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                            ) {
                              errors.email = 'Invalid email address';
                            } 

                            if(!values.password) {
                                errors.password = 'Required';
                            } else if (
                                !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)
                            ) {
                                errors.password = 'Password must have a minimum of eight characters, at least one letter, one number and one special character (*, !, &, etc)'
                            }

                            if(!values.passwordConfirm) {
                                errors.passwordConfirm = 'You must confirm your password'
                            } else if (values.passwordConfirm !== values.password) {
                                errors.passwordConfirm = 'Your passwords do not match'
                            }

                            if(!values.pronouns) {
                                errors.pronouns = 'Required';
                            } 

                            return errors;
                          }}
                          onSubmit={(values, {setSubmitting}) => {
                              setUserData(values)
                            setTimeout(() => {
                              setSubmitting(false);
                              history.push('/workspace', userData);
                            }, 500);
                          }}
                    >
                        {({submitForm, isSubmitting}) => (
                            <Form className={classes.form}>
                                 <Box margin={1}>
                                    <Field
                                    className={classes.input}
                                    component={TextField}
                                    name="firstName"
                                    type="text"
                                    label="First name"
                                    variant="outlined"
                                    />
                                </Box>
                                <Box margin={1}>
                                    <Field
                                    className={classes.input}
                                    component={TextField}
                                    name="lastName"
                                    type="text"
                                    label="Last name"
                                    variant="outlined"
                                    />
                                </Box>
                                 <Box margin={1}>
                                    <Field
                                    className={classes.input}
                                    component={TextField}
                                    name="email"
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    />
                                </Box>
                                <Box margin={1}>
                                    <Field
                                    className={classes.input}
                                    component={TextField}
                                    type="password"
                                    label="Password"
                                    name="password"
                                    variant="outlined" 
                                    />
                                </Box>
                                <Box margin={1}>
                                    <Field
                                    className={classes.input}
                                    component={TextField}
                                    name="passwordConfirm"
                                    type="password"
                                    label="Confirm Password"
                                    variant="outlined"
                                    />
                                </Box>
                                <Box margin={1}>
                                    <Field
                                    className={classes.input}
                                    component={TextField}
                                    name="pronouns"
                                    type="text"
                                    label="Pronouns"
                                    variant="outlined"
                                    />
                                </Box>
                                <Box margin={1}>
                                    <Button
                                    className={classes.button}
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                    >
                                        Next
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}