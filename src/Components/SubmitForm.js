import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Inputs() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Input
        placeholder="Book Title"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Book Author"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Year"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Country"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="City"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Description"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
    <Button variant="contained" className={classes.button}>
        Submit
    </Button>
    </div>
  );
}