import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  head: {
    fontWeight: 'medium',
    marginBottom:'5px',
  },

});

function About(props) {
  const classes = useStyles();

  return (
    <Card  className={classes.root} variant="outlined">
      <CardContent style={{backgroundColor: props.backgroundColor}}>
        <Typography className={classes.head} variant="h5" component="h2">
          {props.Heading}
        </Typography>
        <Typography variant="body2" component="p">
        {props.Content}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default About;