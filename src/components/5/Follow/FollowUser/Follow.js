import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '320px',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    flexGrow: 1,
    overflow: 'hidden',
  },
  align:{
    alignItems: 'center',
  },
  head: {
    fontWeight: 'bold',
    marginBottom:'10px',
  },
}));


export default function Follow() {
  const classes = useStyles();

  return (
    <Card  className={classes.root} variant="outlined">
    <CardContent style={{}}>
    <Typography className={classes.head} variant="h5" component="h2">
          Organizations
        </Typography>
        <Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Wiley</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
        </Grid>
        <Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>P</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Python</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
        </Grid>
        <Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>S</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Samsung</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
        </Grid>
        <Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>G</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Google</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
        </Grid>
        </CardContent>
    </Card>
  );
}
