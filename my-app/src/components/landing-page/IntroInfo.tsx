import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        color: "black",
    },

    header: {
        textAlign: "left",
    },

    body: {
        textAlign: "left",
    },

    button: {
        backgroundColor: "orange",
        color: "white",
    }
});

export default function IntroInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.header} variant="h4">
                Physical Distancing Only Works If We All Participate
            </Typography>
            <Box p={2}></Box>
            <Typography className={classes.body} variant="body1">
                Taking precautions to slow down or prevent the spread of COVID-19 will save lives.
                Families and community members are gradually returning to previously restricted 
                activities when the COVID-19 pandemic began.
            </Typography>
            <Box p={1}></Box>
            <Button variant="contained" className={classes.button}>
                Get started
            </Button>
        </div>
    );
}
  