import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '320px',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    boxShadow: 'none',
},
margin:{
      padding: '0px',
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions className={classes.margin}>
      <Button href="#text-buttons" >
Help
</Button>
<Button href="#text-buttons" >
  About
</Button>
<Button href="#text-buttons">
  Content Policy
</Button>
      </CardActions>
      <CardActions className={classes.margin}>
      <Button href="#text-buttons">
  Terms
</Button>
<Button href="#text-buttons">
  Privacy Policy
</Button>
      </CardActions>
      <CardActions className={classes.margin}>

<Button href="#text-buttons">
CodeLabz © 2022
</Button>
      </CardActions>
    </Card>
  );
}
