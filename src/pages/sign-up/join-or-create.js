import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ReactComponent as FUBULogoSmall } from "../../assets/fubu_logo_small.svg";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Emoji from "../../core/components/core-emoji";
import { useHistory, withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  bigButtons: {
    width: "520px",
    height: "77px",
    fontWeight: 400,
    marginTop: "15px",
    marginBottom: "25px",
    fontSize: "33px",
    borderRadius: "8px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  redButton: {
    borderColor: "#FFB9AE",
    color: "#F1725E",
    "&:hover": {
      backgroundColor: "#F7E1DE",
    },
  },
  redButtonSelected: {
    color: "#ffffff",
    backgroundColor: "#F1725E",
    "&:hover": {
      backgroundColor: "#DD5640",
    },
  },
  miniButtons: {
    width: "143px",
    height: "46px",
    marginTop: "60px",
    marginBottom: "25px",
    marginLeft: "25px",
    marginRight: "25px",
    fontSize: "24px",
    borderRadius: "8px",
  },
  text: {
    marginTop: "10px",
    marginBottom: "50px",
    textAlign: "center",
  },
}));

function JoinOrCreate(props) {
  const classes = useStyles();
  const [role, setRole] = React.useState("");

  let history = useHistory();

  const handleSelected = useCallback(
    (role) => (event) => {
      const newState = Object.assign({}, "");

      // Find the one we clicked and set to true
      switch (role) {
        case "admin":
          newState.admin = true;
          break;
        case "team member":
          newState.member = true;
          break;
        default:
          break;
      }

      // Update our state
      setRole(newState);
    },
    [setRole]
  );

  const handleNext = () => {
    role.admin ? history.push("/create-community-space") : alert("choosing this role would take you to the team member on on boarding flow")
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <FUBULogoSmall className={classes.logo}></FUBULogoSmall>
          </Grid>
          <Grid className={classes.text} item xs={12}>
            <Typography variant="h1"> Welcome! Are you:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={`${classes.bigButtons} ${
                role.admin ? classes.redButtonSelected : classes.redButton
              }`}
              size="large"
              variant="outlined"
              onClick={handleSelected("admin")}
            >
              Creating a community space <Emoji symbol="🛠" label="wrench" />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.bigButtons}
              size="large"
              variant={role.member ? "contained" : "outlined"}
              color="primary"
              onClick={handleSelected("team member")}
            >
              Joining a community space <Emoji symbol="🤝" label="wrench" />
            </Button>
          </Grid>
          <Grid className={classes.text} item xs={12}>
            <Button
              className={classes.miniButtons}
              variant="contained"
              color="secondary"
              onClick={() =>
                history.goBack(
                  alert(
                    "In a full-stack application this form would be repopulated with the input you just entered"
                  )
                )
              }
            >
              Back
            </Button>
            <Button
              className={classes.miniButtons}
              variant="contained"
              disabled={role? false : true}
              color="primary"
              onClick={handleNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default withRouter(JoinOrCreate);
