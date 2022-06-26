import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
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
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  head: {
    fontWeight: 'bold',
    padding: '16px 16px 0',
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function FollowUser(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
    
      <Grid container spacing={1}>
        <Grid item xs={12}>
        <Typography className={classes.head} variant="h5" component="h2">
          {props.Heading}
        </Typography>
          <div className={classes.demo}>
            <List>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                    <Avatar>SA</Avatar>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sarfraz Alam"
                    secondary='Senior developer'
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <PersonAddIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
