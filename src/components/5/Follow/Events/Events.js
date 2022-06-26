import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    cardroot: {
        width: '320px',
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        flexGrow: 1,
        overflow: 'hidden',
      },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  head: {
    fontWeight: 'bold',
    marginBottom:'1px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
}));

export default function Events() {
  const classes = useStyles();

  return (
    <Card  className={classes.cardroot} variant="outlined">
    
    <List className={classes.root}>
    <Typography className={classes.head} variant="h5" component="h2">
          Upcoming Events
        </Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="28 march, 2022"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.inline}
                color="textPrimary"
              >
                Github Students Event
              </Typography>
              {""}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="30 march, 2022"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.inline}
                color="textPrimary"
              >
                Google Summer of Code
              </Typography>
              {""}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="31 march, 2022"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.inline}
                color="textPrimary"
              >
                Mozilla Students Event
              </Typography>
              {''}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Card>
  );
}
