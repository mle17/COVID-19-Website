import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        color: "black",
    },

    header: {
        textAlign: "left",
        fontWeight:"bold",
        color:"#2F281E",
    },

    body: {
        textAlign: "left",
    },
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
        </div>
    );
}
  