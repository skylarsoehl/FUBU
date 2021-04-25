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
import { Typography } from "@material-ui/core";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FFC3BA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "left",
        marginLeft: '90px',
    },
    logo: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
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
    cancel: {
        backgroundColor: theme.palette.error.main,
        color: "#fff",
        width: "139px",
        height: "37px",
        marginBottom: "10px",
        marginTop: "40px",
        marginRight: "22px",
        fontSize: "24px",
        borderRadius: "8px",
        marginLeft: "5px",
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
    subhead: {
        display: "flex",
        marginTop: '50px',
        marginBottom: '50px',
        marginLeft: '10px',
        textAlign: "left",
        fontWeight: 700,
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
        width: "139px",
        height: "37px",
        marginBottom: "90px",
        marginTop: "40px",
        fontSize: "24px",
        borderRadius: "8px",
        marginLeft: "22px",
    },
    input: {
        marginBottom: "22px",
        width: "200px",
        marginLeft: "10px",
        marginRight: "8px",
    },
    form: {
        width: "552px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    scheduleCard: {
        backgroundColor: '#fff',
    },
    timeInput: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    units: {
        width: '140px',
    }
}));

function AdminSchedule() {
    const classes = useStyles();



    let history = useHistory();

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.logoutRow}>
                    <Button href="/" className={classes.logout} variant="contained" size="large" color="error">Logout</Button>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12} className={classes.scheduleCard}>
                        <FUBULogoSmall className={classes.logo}></FUBULogoSmall>
                        <Typography className={classes.title} variant="h1">Create a check-in schedule</Typography>
                        <Formik
                            initialValues={{
                                frequency: 0,
                                time: new Date(),
                                unit: [],
                            }}
                            validate={(values) => {
                                const errors = {};

                                if (values.frequency < 0) {
                                    errors.frequency = "Cannot be negative";
                                }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                alert("This would show you your proposed schedule to review, and would then navigate to the admin dashboard.")
                                setTimeout(() => {
                                    setSubmitting(false);
                                    history.push("/dashboard-admin");
                                }, 500);
                            }}
                        >
                            {({ submitForm, isSubmitting }) => (
                                <Form className={classes.form}>
                                    <Typography className={classes.subhead} variant="h3">Enter a time range</Typography>
                                    <Grid item className={classes.timeInput} xs={12}>
                                        <Field component={TextField}
                                            name="startTime"
                                            id="time"
                                            label="Start time"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                        <Field component={TextField}
                                            name="endTime"
                                            id="time"
                                            label="End time"
                                            type="time"
                                            defaultValue="19:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </Grid>
                                    <Typography className={classes.subhead} variant="h3">Enter time length between check-ins</Typography>
                                    <Grid item className={classes.timeInput} xs={12}>
                                        <Field
                                            className={classes.input}
                                            component={TextField}
                                            name="frequency"
                                            type="Number"
                                            label="Enter a number"
                                            variant="outlined"
                                        />
                                        <FormControl className={classes.units}>
                                            <InputLabel shrink={true} htmlFor="units">
                                                Units
                                             </InputLabel>
                                            <Field
                                                component={Select}
                                                type="text"
                                                name="unit"
                                                multiple={true}
                                                inputProps={{ name: 'units', id: 'units' }}
                                            >
                                                <MenuItem value="hours">Hours</MenuItem>
                                                <MenuItem value="minutes">Minutes</MenuItem>
                                            </Field>
                                        </FormControl>
                                    </Grid>

                                    <Grid className={classes.text} item xs={12}>
                                        <Button
                                            className={classes.cancel}
                                            variant="contained"
                                            href="/dashboard-admin"
                                        >
                                            Cancel
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
            </Grid>
        </ThemeProvider>
    );
}

export default AdminSchedule;
