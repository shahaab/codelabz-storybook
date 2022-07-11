import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Imag from './Imag.png'; 
import Chip from '@material-ui/core/Chip';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '45%',
  },
  grow: {
    flexGrow: 1,
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  margin: {
      marginRight: '5px',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  inline:{
    fontWeight: 600,
  },
  contentPadding:{
    padding: '0 16px',
  },
  icon:{
    padding: '5px',
  }
}));

export default function CardWithPicture(props) {
  // const state = { counter: 0 };

  // const handleIncrement = () => {
  //   this.setState(state => ({ counter: state.counter + 1 }));
  // };

  // const handleDecrement = () => {
  //   this.setState(state => ({ counter: state.counter - 1 }));
  // };

  
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');
  
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  

  const[count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count+1);
  }

  const handleDecrement = () => {
    setCount(count-1);
  }
  // const displayCounter = this.state.counter > 1;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={Imag}
        title="code"
      />
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        title={
            <React.Fragment>
              <Typography
                component="span"
                variant="h7"
                className={classes.inline}
                color="textPrimary"
              >
                Shahaab
              </Typography>
              {" for "}
              <Typography
                component="span"
                variant="h7"
                className={classes.inline}
                color="textPrimary"
              >
                CodeLabz
              </Typography>
            </React.Fragment>
          }
        subheader="Dec 3, 2022"
      />
      <CardContent className={classes.contentPadding} >
      <Typography variant="h5" color="text.primary">
                FreeCodeCamp Especially If You Do Not Have 24/7 Internet Access
                </Typography>
        <Typography variant="body2" color="textSecondary" component="p" paragraph>
        Make sure your conditions fit with the map. Instead of writing logic handling for each case, We had a map, and we put the case and the logic as key, value pairs. Hence, We can retriev the logic from the map based on the key...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Chip label="HTML" component="a" href="#chip" clickable variant="outlined" className={classes.margin} />
      <Typography variant="overline" display="block" >
        10 min read
      </Typography>
      <div className={classes.grow} />
      {/* <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton className={classes.icon}  value="left" aria-label="Thumbs up">
        <ThumbUpAltIcon /> <Typography variant="h7" display="block" >
        100
      </Typography>
      </ToggleButton>
      <ToggleButton className={classes.icon} value="center" aria-label="Thumbs down">
        <ThumbDownIcon />
      </ToggleButton>
    </ToggleButtonGroup> */}
    <ButtonGroup>
    <button onClick={handleIncrement} ><ArrowUpwardIcon /> <span>{count}</span> </button>
      <button onClick={handleDecrement}><ArrowDownwardIcon /></button>
      </ButtonGroup>
        <IconButton aria-label="share">
          <ChatOutlinedIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ShareOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TurnedInNotOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MoreVertOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
