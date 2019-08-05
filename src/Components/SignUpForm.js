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

      return (
           
             <Container style={{width: '100%',}}>
             <Grid  container
                direction="column"
                justify="flex-start"
                alignItems="flex-start">
                     <Grid>
                       <TextField
                        id="filled-simple-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        variant="filled"
                        label="FirstName"
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                         />
                      </Grid>

                      <Grid>
                       <TextField
                        id="filled-simple-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        variant="filled"
                        label="LastName"
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                         />
                      </Grid>

                      <Grid>
                       <TextField
                        id="filled-simple-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        variant="filled"
                        label="UserName"
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
                        placeholder = "example@domaim.com"
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
                         <Button variant="contained" className={classes.button}>
                            Submit
                            </Button>
                          </Grid>
                      </Grid>
                </Grid>       
             </Container>       
      )}