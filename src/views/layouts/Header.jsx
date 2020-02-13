import React from 'react';
import { makeStyles, Typography, AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    position: "absolute",
    right: 0
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.root}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'} color="inherit">About</NavLink>
            <NavLink to={'/contact'} variant="body2">Contact</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
