import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function SubmitForm() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <h4>Book submission</h4>
      <div>
      <TextField
        required
        id="standard-required"
        label="Book name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-multiline-flexible-required"
        multiline
        rows="4"
        className={classes.textField}
        margin="normal"
        placeholder="Book description"
      />
      </div>
      <div>
      <TextField
        required
        id="standard-required"
        label="City"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Country"
        className={classes.textField}
        margin="normal"
      />
      </div>
      <div>
      <TextField
        required
        id="standard-required"
        label="Year of publication"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Image Link"
        className={classes.textField}
        margin="normal"
      />
      </div>
    </form>
  );
}