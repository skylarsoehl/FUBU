import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ReactComponent as FUBULogoSmall } from "../../assets/fubu_logo_small.svg";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
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
    width: "420px",
    height: "77px",
    fontWeight: 400,
    marginTop: "15px",
    marginBottom: "25px",
    fontSize: "33px",
    borderRadius: "8px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    borderColor: "#FFB9AE",
    "&:hover": {
      backgroundColor: "#FFB9AE",
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
  button: {
    width: "246px",
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    marginTop: "15px",
    marginBottom: "25px",
    fontSize: "24px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
  },
  input: {
    marginBottom: "22px",
    width: "500px",
  },
  form: {
    width: "552px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function JoinWorkSpace() {
  const classes = useStyles();

  let history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <FUBULogoSmall className={classes.logo}></FUBULogoSmall>
            <Typography className={classes.title} variant="h1">Create your account</Typography>
          </Grid>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirm: "",
              pronouns: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.firstName) {
                errors.firstName = "Required";
              }

              if (!values.lastName) {
                errors.lastName = "Required";
              }

              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.password) {
                errors.password = "Required";
              } else if (
                !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
                  values.password
                )
              ) {
                errors.password =
                  "Password must have a minimum of eight characters, at least one letter, one number and one special character (*, !, &, etc)";
              }

              if (!values.passwordConfirm) {
                errors.passwordConfirm = "You must confirm your password";
              } else if (values.passwordConfirm !== values.password) {
                errors.passwordConfirm = "Your passwords do not match";
              }

              if (!values.pronouns) {
                errors.pronouns = "Required";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                history.push("/join-or-create");
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
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
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Next
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default JoinWorkSpace;
