import Sidebar from "../../core/components/core-sidebar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// function createData(task, status, assignee, expert, priority) {
//   return { task, status, assignee, expert, priority };
// }

// const rows = [
//     createData('Task A', 'In Progress', '@Me', '@Me', '! Low'),
//     createData('Task B', 'Not Started', '@Me', '@Me', '!! Medium'),
//     createData('Task C', 'Complete', '@Me', '@Me', '!!! High'),
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  table: {
    minWidth: 650,
    padding: "20px",
  },
  paper: {
    marginTop: "30px",
    marginBottom: "40px",
    padding: "10px",
  },
  logout: {
    backgroundColor: theme.palette.error.main,
    width: "148px",
    height: "46px",
    color: "#fff",
    fontSize: "24px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
  logoutRow: {
    marginTop: "32px",
    marginRight: "50px",
    display: "flex",
    justifyContent: "flex-end",
    height: "%50",
  },
  text: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "50px",
    fontWeight: 700,
  },
  checkins: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "350px",
    height: "520px",
    backgroundColor: "#8D919C",
    color: "#fff",
    borderRadius: "6px",
    marginLeft: "36px",
    padding: "20px",
    marginBottom: "150px",
  },
  taskBoard: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "760px",
    height: "520px",
    backgroundColor: "#8D919C",
    color: "#fff",
    borderRadius: "6px",
    marginLeft: "110px",
    padding: "20px",
    marginBottom: "50px",
  },
  card: {
    width: "256px",
    height: "160px",
    marginBottom: "20px",
    marginTop: "40px",
    border: "1px solid #F2F2F2",
    borderRadius: 6,
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  cardHeader: {
    fontSize: "18px",
    textAlign: "left",
  },
  cardBody: {
    fontSize: "16px",
    textAlign: "left",
    marginTop: "15px",
  },
  miniButtons: {
    width: "101px",
    height: "31px",
    marginBottom: "10px",
    fontSize: "18px",
    borderRadius: "8px",
    marginLeft: "5px",
  },
  taskButton: {
    width: "200px",
    height: "50px",
    marginTop: "30px",
    fontSize: "18px",
    borderRadius: "8px",
    marginLeft: "5px",
  },
  errorTxt: {
    color: "red",
  },
  nothingText: {
    color: "#D7D7D7",
    marginTop: "25px",
    marginBottom: "100px",
  },
}));

function AdminDashboard() {
  const classes = useStyles();
  
  setTimeout(function(){ alert("setting up community space modal would pop up like this after page load"); }, 500);

  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} className={classes.root}>
        <Grid container xs={2}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid container xs={10}>
          <Grid item xs={12} className={classes.logoutRow}>
            <Button
              className={classes.logout}
              variant="contained"
              size="large"
              color="error"
            >
              Logout
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text}> Welcome Back!</Typography>
          </Grid>
          <Grid className={classes.text} item xs={12}>
            <Grid item xs={3}>
              <Grid item className={classes.checkins}>
                <Typography variant="h1">Today's Check-ins:</Typography>
                <Typography className={classes.nothingText} variant="h3">
                  Nothing here yet!
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid item className={classes.taskBoard}>
                <Grid item xs={12}>
                  <Typography variant="h1">Today's Tasks:</Typography>
                </Grid>
                <Typography className={classes.nothingText} variant="h3">
                  Nothing here yet!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default AdminDashboard;
