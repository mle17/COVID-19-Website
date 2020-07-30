import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: "#775298",
    },
    title: {
      flexGrow: 1,
      color: "white",
      fontWeight: "bold",
    },
  }),
);

export default function CovidAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19 Future Predicted
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
