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
import FilledInputAdornments from './Components/SignUpForm' 
// import AppBar from './Components/Appbar';
// import AppBar from './Components/Appbar';

// Feras import
import BooksList from './Components/BooksList';
import BookCard from './Components/BookCard'
// import AppBar from './Components/Appbar';
// import AppBar from './Components/Appbar';
//import SearchResults from './Components/SearchResult';
import SearchCard from './Components/SearchCard.js'

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
      <Grid item xs={12}>
        <Paper className={classes.paper}><AppBar></AppBar></Paper>
      </Grid>
      
      <Grid item xs={9}>
        <Paper className={classes.paper}>Book List Here<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>User Inforamtion Here<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Paper>
      </Grid>
      <Grid item>
        <Paper className={FilledInputAdornments}> <FilledInputAdornments> </FilledInputAdornments> </Paper>

      </Grid>
      
      
      <Grid item xs={12}>
        <Paper className={classes.paper}>Mahmoud</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}><BookCard /></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}><SearchCard /></Paper>
        </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Feras</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Loai</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}><Footer></Footer></Paper>
      </Grid>

          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <Route exact path='/' component={BooksList}></Route>
              <Route exact path='/Profile' component={BooksList}></Route>
              <Route exact path='/MyBooks' component={MyBooks}></Route>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}><FilledInputAdornments> </FilledInputAdornments></Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>test</Paper>
          </Grid>

    </Grid>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>


  </div>
  );
}

export default App;
