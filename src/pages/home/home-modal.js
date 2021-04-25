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


const useStyles = makeStyles((theme) => ({
    linkButton: {
        fontSize: '24px',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        fontWeight: 400,
        marginTop: '15px',
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
        paddingTop: '70px',
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
        padding: '90px',
    },
    linkButton: {
        fontSize: '24px',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        fontWeight: 400,
        marginTop: '15px',
    },
}))(MuiDialogContent);

export default function CustomizedDialog() {
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
            <Button className={classes.linkButton} onClick={handleClickOpen}>
                Learn more
      </Button>

            <Dialog onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose}>
                    Some Important Terms
        </DialogTitle>
                <DialogContent >
                    <Typography variant="h6"> What is <em><b>mutual aid?</b></em></Typography>
                    <br></br>
                    <Typography variant="p" gutterBottom>
                        Mutual aid is when people get together to meet each other’s basic survival needs.
                        Projects include: guerilla fundraising (mostly through cashapp/venmo), childcare/pretcare,
                        language translators, and community fridges.
          </Typography>
                    <Typography variant="h6"> <br></br>What are <em><b>community fridges?</b></em></Typography>
                    <Typography variant="p" gutterBottom>
                        <br></br>
                        Community fridges are a type of mutual aid project that address food-insecurity.
                        They’re stocked with groceries by members of the community and can be accessed at no cost by anyone who needs food.
          </Typography>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}
