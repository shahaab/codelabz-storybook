import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  
  display: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
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
    marginRight: '20px',
  },

}));


export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>

          <Paper className={classes.paper}>
    <div className={classes.display}>
    <Typography className={classes.titlecolor} variant="h6" gutterBottom>
    Export account data
      </Typography>
      <Button color="primary">Start Export</Button>
    </div>
    <div className={classes.display}>
    <Typography className={classes.titlecolor} variant="h6" gutterBottom>
    Successor settings&nbsp;&nbsp;  
      </Typography>
      <Button color="primary">Add successor</Button>
    </div>
      <Button color="secondary">Deactivate Account</Button>
      <div>
      <Button color="secondary">Delete Account</Button>
      </div>
    
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
