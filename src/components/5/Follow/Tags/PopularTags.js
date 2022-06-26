import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

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
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    borderRadius: '5px',
    backgroundColor: '#f6f6f6',
  },
  head: {
    fontWeight: 'bold',
    padding: '16px 16px 10px',
  },
}));

const handleClick = () => {
    console.info('You clicked the Chip.');
  };

export default function PopularTags() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'Angular' },
    { key: 6, label: 'jQuery' },
    { key: 7, label: 'Polymer' },
    { key: 8, label: 'React' },
    { key: 9, label: 'Vue.js' },
    { key: 10, label: 'Angular' },
    { key: 11, label: 'jQuery' },
    { key: 12, label: 'Polymer' },
    { key: 13, label: 'React' },
    { key: 14, label: 'Vue.js' },
    { key: 14, label: 'Javascript' },
  ]);


  return (
    <Card  className={classes.cardroot} variant="outlined">
    <Typography className={classes.head} variant="h5" component="h2">
          Popular Tags
        </Typography>
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {

        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              className={classes.chip}
              onClick={handleClick}
            />
          </li>
        );
      })}
    </Paper>
    </Card>
  );
}
