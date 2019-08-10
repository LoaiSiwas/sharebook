import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'

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


function pushData() {
    firebase.firestore().collection('books').add(initialState.book)
  }

  const initialState = {
    book: {
        BookName: "",
        BookImage: "",
        BookDescription: "",
        BookCountry: "",
        BookCity: "",
        BookAuthor: "",
        BookYear: ""
    }
};

export default class SubmitBook extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
}

  
render() {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <h4>Book submission</h4>
      <div>
      <TextField
        required
        BookName="Name"
        value={this.state.person.name}
        id="standard-required"
        label="Book name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-multiline-flexible-required"
        BookDescription="description"
        value={this.state.person.description}
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
        BookCity="city"
        value={this.state.person.city}
        id="standard-required"
        label="City"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        BookCountry="country"
        value={this.state.person.country}
        id="standard-required"
        label="Country"
        className={classes.textField}
        margin="normal"
      />
      </div>
      <div>
      <TextField
        required
        BookYear="year"
        value={this.state.person.year}
        id="standard-required"
        label="Year of publication"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        BookImage="image"
        value={this.state.person.image}
        id="standard-required"
        label="Image Link"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        BookAuthor="author"
        value={this.state.person.author}
        id="standard-required"
        label="Image Link"
        className={classes.textField}
        margin="normal"
      />
      </div>
      <Button onClick={pushData()} variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </form>
  );
}
}