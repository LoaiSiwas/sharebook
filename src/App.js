import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import AppBar from './Components/Appbar';
import Footer from './Components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyBooks from './Components/MyBooks'
// Mahmoud import
import SignUpForm from './Components/SignUpForm' 
import Profile from './Components/Profile';

// import AppBar from './Components/Appbar';

// Feras import
import BooksList from './Components/BooksList';
import SubmitForm from './Components/SubmitForm';
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
    <BrowserRouter>
    <AppBar />
    <Switch>
    <Grid container spacing={3}>

    <Grid item xs={9}>
      <Paper className={classes.paper}>
        <Route exact path='/' component={BooksList}></Route>
        <Route exact path='/MyBooks' component={MyBooks}></Route>
        <Route exact path='/addabook' component={SubmitForm}></Route>
      </Paper>
    </Grid>

    <Grid item xs={3}>
        <Paper className={classes.paper}><SignUpForm ref={(component) => {window.SignUpForm = component;}}> </SignUpForm></Paper>
    </Grid>

    </Grid>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  </div>
  );
}

export default App;
