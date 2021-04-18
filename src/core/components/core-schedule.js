import React from 'react';
import ScheduleCard from '../components/core-schedule-card';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    card: {
        width: 1109,
        height: 395,
        backgroundColor: "#83A599",
        borderRadius: 6,
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        paddingBottom: '15px',
    },
    header: {
        fontFamily: 'Archivo, san-serif',
        fontWeight: 700,
        color: '#fff',
        fontSize: '33px',
        textAlign: 'center',
        paddingTop: '20px',
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


export default function Schedule() {
    const classes = useStyles();

    // let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // let weekList = weekdays.map(function(weekday, index) {
    //     return <ScheduleCard
    // needs prop for props.scheduleData, where scheduleData is a list
    // of date objects (includes both day of week(string) and array of times).
    // })

    return (
        // {weekdays.map(function(name, index){
        //     return <li key={ index }>{weekday}</li>;
        //   })}
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.header} >
                    Your Schedule for 4/5 - 4/11
        </Typography>
                <ScheduleCard />
            </CardContent>
            <CardActions className={classes.action}>
                <Button variant="contained" color="secondary">Edit</Button>
            </CardActions>
        </Card>
    );
}






