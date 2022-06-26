import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from './profile 1 (1).png';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '40%',
        justifyContent: 'flex-start',
    },
    margin: {
        margin: theme.spacing(1),
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
    textMargin: {
        margin: '0 8px',
    },
}));

export default function FillUserProfile() {
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
                    <Typography className={classes.textMargin} variant="h5" >
                        Shahaab Manzar
                    </Typography>
                    <InputBase
        className={classes.margin}
        defaultValue="Add profile credentials"
        inputProps={{ 'aria-label': 'naked' }}
      />
                    <Typography className={classes.textMargin} variant="body2" color="textSecondary" gutterBottom>
                        25 followers • 5 following
                    </Typography>
                    <InputBase
        className={classes.margin}
        defaultValue="Write a description about yourself"
        inputProps={{ 'aria-label': 'naked' }}
      />
                </CardContent>
                <div className={classes.controls}>
                </div>
            </div>

        </Card>
    );
}
