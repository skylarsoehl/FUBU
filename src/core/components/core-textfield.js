import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            id: "outlined-search",
            label: "Search field",
            type: "search",
            variant: "outlined",
        },
    },
}));
    

export default function CoreTextfield() {
    const classes = useStyle();
    return (
    
        <FormControlLabel control={classes.root} noValidate autoComplete="off">
            {/* <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
            <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
            /> */}
        </FormControlLabel>
    );
}



