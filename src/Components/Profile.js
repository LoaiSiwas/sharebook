import React from 'react';
import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  });

function Profile () {
    const classes = useStyles();

    return (
        <Container>
            <div>
                Profile
            </div>
    
            <h3>First Name</h3>
            <h3>Last Name </h3>
            <div>

            </div>
        </Container>
    )
}

export default Profile;