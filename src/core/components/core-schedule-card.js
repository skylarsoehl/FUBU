import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    card: {
        width: 132,
        height: 212,
        border: '1px solid #F2F2F2',
        borderRadius: 6,
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
    },
    header: {
        fontFamily: 'Archivo, san-serif',
        fontWeight: 700,
        backgroundColor: '#fff',
        textAlign: 'center',
        paddingBottom: '25px',
    },
    body: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: '16px',
        paddingBottom: '24px',
    },
    action: {
    display: 'flex',
    justifyContent: 'space-around',
    }
}));


export default function ScheduleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.header} >
                    Monday
        </Typography>
                <Typography className={classes.body}>
                    Maintenance
          <br />
                    9:00 am
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <Button variant="contained" color="primary">Start</Button>
            </CardActions>
        </Card>
    );
}

/* make time a property 
props.time*/

