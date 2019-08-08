import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1),
  },
}));
export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography color="inherit">
                <Link href="https://github.com/LoaiSiwas/sharebook" color="inherit" className={classes.link}>Team</Link>
                <Link href="https://github.com/LoaiSiwas/sharebook" color="inherit" className={classes.link}>Github</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}