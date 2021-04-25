import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../theme";
import Emoji from "../../core/components/core-emoji";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(5),
  },
  title: {
    fontWeight: 600,
    textAlign: "center",
    paddingTop: "70px",
  },
  body: {
    fontSize: "24px",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#251F1C",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.title} {...other}>
      <Typography className={classes.h1} variant="h1">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    padding: "50px",
    display: "flex",
    flexWrap: "wrap",
    fontSize: '24px',
  },
}))(MuiDialogContent);

export default function NextStepsModal() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        justifyContent="center"
        onClose={handleClose}
        open={open}
        maxWidth="md"
      >
        <DialogTitle onClose={handleClose}>
          Welcome to FUBU <Emoji symbol="👋" label="wave" />
        </DialogTitle>
        <DialogContent>
          <Grid>
            <Grid item>
              <Link to="/schedule-admin">
                1. Create a schedule for fridge check-ins
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              2. Create a fridge check-in/ maintenence form
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              3. Add a task to your table of action items
            </Typography>
          </Grid>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
