import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import * as firebase from "firebase/app";
import "firebase/auth";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';



class SignUpForm extends React.Component {


  constructor() {
    super();
    this.state = ({
      FirstName: '',
      LastName: '',
      UserName: '',
      Email: '',
      password: '',
      showPasswordSignIn: false,
      showPasswordSignUp: false,
      signInPassword: '',
      signInEmail: '',
      showForm: true, 
      user: null
    });
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.handleUserChange(this.state.user);
  }

  componentDidUpdate(old, old_state) {
    if (old_state.user !== this.state.user) {
      this.handleUserChange(this.state.user);
    }
  }

  handleUserChange(user) {
    if (this.state.user && (this.isSignIn || this.isSignUp)) {

      this.setState({ showForm: false });

      if (this.isSignIn) {
        this.isSignIn = false
        // TODO: Change to sharebook firebase 
        this.loadUserInfo(user);
        //Fetch data from database

      }


      else {
        //Save to database
        const db = firebase.firestore();

        db.collection('Users').doc(user.email).set({
          FirstName: this.state.FirstName,
          LastName: this.state.LastName,

        })
          .then(function () {

            console.log("Document successfully written!");
          })
          .catch(function (error) {

            console.error("Error writing document: ", error);
          });
        this.isSignUp = false;
      }

    }

    else if (user) {
      this.setState({ showForm: false });
      this.loadUserInfo(user);
    }

    else {
      this.setState({ showForm: true });
    }
  }
  handleChange = prop => event => {
    var new_state={};
    new_state[prop] = event.target.value;
    this.setState(new_state,()=>{
      console.log(this.state)
    });
  };

  handleClickShowPasswordSignIn = () => {
    this.setState({  showPasswordSignIn: !this.state.showPasswordSignIn });
  };

  handleClickShowPasswordSignUp = () => {
    this.setState({  showPasswordSignUp: !this.state.showPasswordSignUp });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  signUp() {
    this.isSignUp = true;
    firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message)
      // ...
    }).then((result) => {
      console.log(result);
    })
  }

  signIn() {
    this.isSignIn = true;

    firebase.auth().signInWithEmailAndPassword(this.state.signInEmail, this.state.signInPassword).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    }).then((result) => {
      console.log(result)

    });

  }

  isSignIn = false
  isSignUp = false




  signOut() {
    firebase.auth().signOut().then(function () {
      console.log("YOU'RE SIGNED OUT ")
    }).catch(function (error) {
      // An error happened.
      console.log("Something went wrong")
    });
  }






  render() {
    return (<Grid>
      <Grid style={{display:this.state.showForm?"none":"inherit"}}>
        <Card>
          <CardActionArea>
            <Avatar
              style={{margin: '10px auto',
              width: 120,
              height: 120,}}
              src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {`${this.state.FirstName} ${this.state.LastName}`}
              </Typography>
               
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              My Books
        </Button>
            <Button onClick={this.signOut} size="small" color="primary">
              Sign out
        </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        style={{ display: this.state.showForm ? "inherit" : "none" }}

      ><Grid container
        direction="column"
        justify="flex-start"
        alignItems="flex-start">
          <Grid item>
            {/* Sign in Email */}
            <TextField
              id="filled-simple-start-adornment"
              variant="filled"
              label="Email"
              value={this.state.signInEmail}
              onChange={this.handleChange('signInEmail')}
              style={{margin:10}}
              placeholder="example@domaim.com"
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
          </Grid>
          {/* SignIn Password */}
          <Grid item xs={11}>
            <TextField
              id="filled-adornment-password"
             variant="filled"
              type={this.state.showPasswordSignIn ? 'text' : 'password'}
              style={{margin:10}}
              label="Password"
              value={this.state.signInPassword}
              onChange={this.handleChange('signInPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle signInPassword visibility"
                      onClick={this.handleClickShowPasswordSignIn}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPasswordSignIn ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {/* LogIn button */}
          <Button onClick={this.signIn} variant="contained"   
          style={{margin:10}}>
          Log in
          </Button>
        </Grid>
            
        {/*  signUp Form  */}
        <Grid container
        direction="column"
        justify="flex-start"
        alignItems="flex-start">
          {/* FirstName */}
          <Grid item>
            <TextField
              id="filled-simple-start-adornment" 
              variant="filled"
              label="FirstName"
              style={{margin:10}}

              onChange={this.handleChange('FirstName')}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,

              }}
            />
          </Grid>

          {/* LastName*/}
          <Grid item>
            <TextField
              id="filled-simple-start-adornment" 
              variant="filled"
              label="LastName"
              value={this.state.LastName}
              onChange={this.handleChange('LastName')}
              style={{margin:10}}

              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
          </Grid>

          {/* UserName */}
          <Grid item>
            <TextField
              id="filled-simple-start-adornment" 
              variant="filled"
              label="UserName"
              onChange={this.handleChange('UserName')}

              style={{margin:10}}

              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-simple-start-adornment" 
              variant="filled"
              label="Email"
              value={this.state.Email}
              onChange={this.handleChange('Email')}

              style={{margin:10}}

              placeholder="example@domaim.com"
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            </Grid>
            <Grid item>
              <TextField
                id="filled-adornment-password" 
                variant="filled"
                type={this.state.showPasswordSignUp ? 'text' : 'password'}
                label="Password"
                style={{margin:10}}
              
                value={this.state.password}
                onChange={this.handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPasswordSignUp}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPasswordSignUp ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Button onClick={this.signUp} variant="contained" style={{margin:10}}>
                Sign up
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    
    );
  }


  loadUserInfo(user) {
    console.log("dskc");
    const db = firebase.firestore();
    db.collection('Users').doc(user.email).get().then((response) => {
      let data = response.data();
      this.setState({
        FirstName: data.FirstName,
        LastName: data.LastName
      });
    }).catch((err) => {
      console.log(err);
    });
  }

}
export default SignUpForm;