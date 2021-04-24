import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import start from './start.css'


const useStyles = makeStyles((start) => ({
  root: {
    minWidth: 275,
    alignItems: "center",
  },
  pos: {
    marginBottom: 12
  },
}));

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <div class="container4">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                  <Typography variant="h1">
                    About Task Lists
                  </Typography>
                  <br />
                  <Typography variant="p">
                    At this stage, you can create forms or checklists for your
                    volunteers to fill out. Start by choosing your type of question,
                    and customize for what you need!
                    <br />
                  </Typography>
                </CardContent>
              <CardActions>
                  <Button variant="contained" color="primary">
                    Create
                  </Button>
                  <Button variant="contained" color="secondary">
                    Skip for now
                  </Button>
              </CardActions>
            </Card>
            </div>
            </Grid>
            </Grid>
  );
}
