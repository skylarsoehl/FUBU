import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ReactComponent as FUBULogoSmall } from "../../assets/fubu_logo_small.svg";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F3D7D2",
    width: "300px",
    height: "1024px",
    border: "1px solid #B0B3BC",
  },
  logo: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  h1: {
    marginLeft: "10px",
    marginTop: "10px",
    textAlign: "left",
    fontSize: "30px",
    color: "#F1725E",
  },
  text: {
    marginLeft: "10px",
    marginTop: "10px",
    marginBottom: "36px",
    textAlign: "left",
    fontSize: "24px",
  },
  linkText: {
    marginTop: "20px",
    marginBottom: "36px",
    marginLeft: "10px",
    textAlign: "left",
    fontSize: "17px",
    fontWeight: 700,
    cursor: "pointer",
  },
}));

function Sidebar(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <FUBULogoSmall className={classes.logo}></FUBULogoSmall>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.h1} variant="h1">
              South End Fridge
            </Typography>
            <br></br>
            <br></br>
            <Typography className={classes.text} variant="p">
              {" "}
              Role:{" "}
              <em>
                <b>Admin</b>
              </em>
            </Typography>
            <br></br>
            <br></br>
            <Link className={`${classes.linkText} ${classes.text}`}> View check-in forms</Link>
            <br></br>
            <br></br>
            <Link className={classes.linkText}>View check-in schedules</Link>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Sidebar;
