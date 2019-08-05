import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyATBG2Q0SG1Md7EePZjOG92M3YX8NpgBdA",
    authDomain: "share-book-d99d5.firebaseapp.com",
    databaseURL: "https://share-book-d99d5.firebaseio.com",
    projectId: "share-book-d99d5",
    storageBucket: "share-book-d99d5.appspot.com",
    messagingSenderId: "938760144413",
    appId: "1:938760144413:web:7d88e8975c088ee2"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

function renderBook(doc){
    document.getElementById("title").innerHTML = doc.data().Title
    document.getElementById("description").innerHTML = doc.data().Description
    document.getElementById("image").src= doc.data().Image-URL
    document.getElementById("image").alt= doc.data().Title
}


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

db.collection('books').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBook(doc);
    })
})

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <img src="#" id="image" alt="Loading..."/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" id="title">
            Loading...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" id="description">
            Loading...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          More details
        </Button>
      </CardActions>
    </Card>
  );
}