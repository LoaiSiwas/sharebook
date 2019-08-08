import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import * as firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function FilledInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    FirstName: '',
    LastName: '',
    UserName: '',
    Email: '',
    password: '',
    showPassword: false,
    signInPassword: '',
    signInEmail: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };



  function signUp() {

    firebase.auth().createUserWithEmailAndPassword(values.Email, values.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  function signIn() {

    firebase.auth().signInWithEmailAndPassword(values.Email, values.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    }).then(() => {
      console.log("Sign up sucsess")

    });

  }

  



  function signOut() {
    firebase.auth().signOut().then(function () {
      console.log("YOU'RE SIGNED OUT ")
    }).catch(function (error) {
      // An error happened.
      console.log("Something went wrong")
    });
  }





  return (

    <Container style={{ width: '100%', }}>
      <Grid container
        direction="column"
        justify="flex-start"
        alignItems="flex-start">
        <Grid item>
            {/* Sign in Email */}
          <TextField
            id="filled-simple-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            label="Email"
            value={values.signInEmail}
            onChange={handleChange('signInEmail')}

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
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            type={values.showPassword ? 'text' : 'password'}
            label="Password"
            value={values.signInPassword}
            onChange={handleChange('signInPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle signInPassword visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* LogIn button */}
        <Button variant="contained" color="primary" className={classes.button}>
          Log in
                     </Button>

            {/* FirstName signUp Form */}
        <Grid>
          <TextField
            id="filled-simple-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            label="FirstName"

            onChange={handleChange('FirstName')}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,

            }}
          />
        </Grid>

            {/* LastName*/}
        <Grid>
          <TextField
            id="filled-simple-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            label="LastName"
            value={values.LastName}
            onChange={handleChange('LastName')}

            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
        </Grid>

            {/* UserName */}
        <Grid>
          <TextField
            id="filled-simple-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            label="UserName"
            onChange={handleChange('UserName')}


            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            id="filled-simple-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            label="Email"
            value={values.Email}
            onChange={handleChange('Email')}


            placeholder="example@domaim.com"
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />

          <Grid item>
            <TextField
              id="filled-adornment-password"
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
              type={values.showPassword ? 'text' : 'password'}
              label="Password"
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <Button onClick={signUp} variant="contained" className={classes.button}>
              Sign up
                            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}