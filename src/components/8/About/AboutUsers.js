import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        [theme.breakpoints.down('sx')]: {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    head: {
        fontWeight: 'medium',
        marginBottom: '5px',
    },
}));

function AboutUsers(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent style={{ backgroundColor: props.backgroundColor }}>
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
export default AboutUsers;