import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import AppBar from './Components/Appbar';
import Footer from './Components/Footer';
// Mahmoud import
import FilledInputAdornments from './Components/SignUpForm' 
// import AppBar from './Components/Appbar';
// import AppBar from './Components/Appbar';

// Feras import
import BooksList from './Components/BooksList';
import BookCard from './Components/BookCard'
// import AppBar from './Components/Appbar';
// import AppBar from './Components/Appbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: "#fafafa",
  },  
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar></AppBar>
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Paper className={classes.paper}><BooksList /></Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}><FilledInputAdornments> </FilledInputAdornments></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Mahmoud</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Mahmoud</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Feras</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Feras</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Feras</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Loai</Paper>
      </Grid>
    </Grid>
    <Footer></Footer>
  </div>
  );
}

export default App;
