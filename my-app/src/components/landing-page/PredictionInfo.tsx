import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '50%',
        color: "black",
    },
  });

export default function PredictInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5">
                Let's predict how many lives you can save...
            </Typography>
        </div>
    );
}
  