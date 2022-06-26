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
    alignItems: 'flex-start',
  },
  head: {
    fontWeight: 'bold',
    marginBottom:'10px',
  },
  height: {
    lineHeight: '1',
    marginBottom: '1.5em',
  },
}));


export default function FollowOrgs() {
  const classes = useStyles();

  return (
    <Card  className={classes.root} variant="outlined">
    <CardContent style={{}}>
    <Typography className={classes.head} variant="h5" component="h2">
          Organizations To Follow
        </Typography>
        <Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid >
          <Grid className={classes.align} container wrap="nowrap">
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Wiley</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
          </Grid>
          <Grid>
            <Typography className={classes.height} variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
          </Grid>
        </Grid>
          </Grid>

          <Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>P</Avatar>
          </Grid>
          <Grid >
          <Grid className={classes.align} container wrap="nowrap">
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Python</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
          </Grid>
          <Grid>
            <Typography className={classes.height} variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
          </Grid>
        </Grid>
          </Grid><Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>G</Avatar>
          </Grid>
          <Grid >
          <Grid className={classes.align} container wrap="nowrap">
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Google</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
          </Grid>
          <Grid>
            <Typography className={classes.height} variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
          </Grid>
        </Grid>
          </Grid><Grid className={classes.align} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>Y</Avatar>
          </Grid>
          <Grid >
          <Grid className={classes.align} container wrap="nowrap">
          <Grid item xs zeroMinWidth>
            <Typography variant="h6" noWrap>Yahoo</Typography>
          </Grid>
          <Grid>
          <Button color="primary">Follow</Button>
          </Grid>
          </Grid>
          <Grid>
            <Typography className={classes.height} variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
          </Grid>
        </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
}
