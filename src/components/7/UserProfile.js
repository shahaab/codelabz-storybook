import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import image from './profile 1 (1).png';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '40%',
        justifyContent: 'space-around',
    },
    icon: {
        justifyContent: 'space-between',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '26%', //image size could be done in a better way
        margin: '11px',
    },
}));

export default function UserProfile() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={image}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h5" gutterBottom>
                        Shahaab Manzar
                    </Typography>
                    <Typography variant="subtitle2" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        25 followers • 5 following
                    </Typography>
                    <CardActions className={classes.icon} disableSpacing>
                        <Button variant="contained" color="primary">
                            Follow
                        </Button>
                        <Link href="#" color="inherit">
                            Share
                        </Link>
                        <Link href="#" color="inherit">
                            Report
                        </Link>
                        <IconButton aria-label="share">
                            <MoreHorizIcon />
                        </IconButton>
                    </CardActions>
                </CardContent>
                <div className={classes.controls}>
                </div>
            </div>

        </Card>
    );
}
