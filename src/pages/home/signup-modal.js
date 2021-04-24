import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';


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
        width: '327px',
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
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
}))(MuiDialogContent);

export default function LoginDialog() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

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
                    <TextField className={classes.input} id="firstNameInput" label="First Name" variant="outlined" />
                    <TextField className={classes.input} id="lastNameInput" label="Last Name" variant="outlined" />
                    <TextField className={classes.input} id="emailInput" label="Email" variant="outlined" />
                    <TextField className={classes.input}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <TextField className={classes.input}
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <TextField className={classes.input} id="passInput" label="Pronouns" variant="outlined" />
                    <Button className={classes.button} size="large" variant="contained" disabled={"disabled"} color="primary" onClick={handleClickOpen}>Next</Button>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}