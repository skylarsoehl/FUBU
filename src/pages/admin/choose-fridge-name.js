import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as FUBULogoSmall } from "../../assets/fubu_logo_small.svg";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  logo: {
    paddingTop: theme.spacing(4),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  input: {
    marginTop: "50px",
    marginBottom: "40px",
    width: "500px",
  },
  miniButtons: {
    width: "143px",
    height: "46px",
    marginBottom: "25px",
    marginLeft: "50px",
    marginRight: "50px",
    fontSize: "24px",
    borderRadius: "8px",
  },
  text: {
    marginTop: "50px",
    marginBottom: "25px",
    textAlign: "center",
  },
  buttonText: {
    marginTop: "40px",
    marginBottom: "25px",
    textAlign: "center",
  },
}));

function ChooseFridgeName() {
  const classes = useStyles();

  const [completed, setCompleted] = React.useState(false);

  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <FUBULogoSmall className={classes.logo}></FUBULogoSmall>
      <Typography className={classes.text} variant="h1">
        {" "}
        What's the name of your <br></br>community fridge?
      </Typography>
      <Grid container className={classes.root}>
        <Formik
          initialValues={{
            fridgeName: "",
          }}
          validate={(values) => {
            const errors = {};

            values.fridgeName
              ? setCompleted(true)
              : (errors.fridgeName = "Required");

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              history.push("/dashboard-admin");
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              <Box margin={1}>
                <Field
                  className={classes.input}
                  component={TextField}
                  name="fridgeName"
                  type="text"
                  label="Fridge Name"
                  variant="outlined"
                />
              </Box>
              <Grid className={classes.text} item xs={12}>
                <Button
                  className={classes.miniButtons}
                  variant="contained"
                  color="secondary"
                  onClick={() => history.goBack()}
                >
                  Back
                </Button>
                <Button
                  className={classes.miniButtons}
                  size="large"
                  variant="contained"
                  color="primary"
                  disabled={completed ? false : true}
                  onClick={submitForm}
                >
                  Next
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </ThemeProvider>
  );
}

export default ChooseFridgeName;
