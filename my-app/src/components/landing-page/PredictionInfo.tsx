import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '50%',
        color: "black",
    },

    text: {
        color: "#2f281e",
        fontWeight: "bold",
    }
  });

export default function PredictInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.text}>
                Let's predict how many lives you can save...
            </Typography>
        </div>
    );
}
  