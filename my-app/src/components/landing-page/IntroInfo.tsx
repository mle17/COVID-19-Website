import React from 'react';
import { Typography } from '@material-ui/core';
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
  });

export default function IntroInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.header} variant="h4">
                Physical Distancing Only Works If We All Participate
            </Typography>
            <br></br>
            <Typography className={classes.body} variant="body1">
                Taking precautions to slow down or prevent the spread of COVID-19 will save lives.
                Families and community members are gradually returning to previously restricted 
                activities when the COVID-19 pandemic began.
            </Typography>
        </div>
    );
}
  