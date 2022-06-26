//other button from sarfraz
import AddBoxIcon from '@material-ui/icons/AddBox';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
  },
  details: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  textdetails: {
    marginLeft:'5px',
  },
  titlecolor: {
    color: 'black',
  }
}));

export default function NewCodelabzButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>

          <Paper className={classes.paper}>
          <div className={classes.details}>
          <div>
          <AddBoxIcon color="primary" style={{ fontSize: 55}} />
          </div>
          <div className={classes.textdetails}>

          <Typography variant="h5" component="h2" className={classes.titlecolor}>
          New Codelabz
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Share a tutorial
        </Typography>
          </div>
          </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
