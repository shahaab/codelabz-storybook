import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    formControl: {
        minWidth: 120,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    divDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    margin: {
        marginLeft: '15px',
    },
    marginR:{
        marginRight: '20px',
    }
}));

export default function SwitchAccount() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.details}>
                <div>
                    <Avatar alt="Shahaab" src="/static/images/avatar/1.jpg" className={classes.large} />
                </div>
                <div className={classes.margin}>
                    <Typography variant="h5" >
                        Shahaab Manzar
                    </Typography>
                    <div className={classes.divDetails}>

                        <Typography variant="subtitle2" >
                            Personal account
                        </Typography>
                        <IconButton aria-label="share">
                            <SwapHorizIcon />
                        </IconButton>
                        <FormControl className={classes.formControl}>
                            <NativeSelect
                                className={classes.selectEmpty}
                                value={state.age}
                                name="age"
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'age' }}
                            >
                                {/* prints the account which is already selected */}
                                <option value="" disabled color='primary'>
                                    Switch to another account
                                </option>
                                <option value={10}>manzar@gmail.com </option>
                                <option value={20}>shahaab@gmail.com </option>
                                <option value={30}>mshahaabmanzar@gmail.com </option>
                            </NativeSelect>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </div>
                </div>
            </CardContent>
            <Button className={classes.marginR} variant="outlined">Go to your personal profile</Button>
        </Card>
    );
}
