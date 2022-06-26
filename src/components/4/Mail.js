import React from 'react';
import {
    alpha,
    ThemeProvider,
    withStyles,
    makeStyles,
    createTheme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({

    display: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    color: {
        color: '#039500',
    },
    details: {
        color: '#000',
        fontSize: '1.2rem',
    },
    margin: {
        marginBottom: '8px',
    },
    titlecolor: {
        color: 'black',
        marginRight: '20px',
    },

}));


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '320px',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

export default function Mail() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>

                    <Paper className={classes.paper}>
                        <div className={classes.display}>
                            <Typography className={classes.titlecolor} variant="h6" gutterBottom >
                                mshahaabmanzar@gmail.com -<span className={classes.color}> Primary</span>
                            </Typography>
                            {/* <Button color="primary">Start Export</Button> */}
                        </div>
                        <FormControl className={classes.margin} gutterBottom>
                            <InputLabel className={classes.details} htmlFor="bootstrap-input">
                                Add Email Address
                            </InputLabel>
                            <BootstrapInput defaultValue="mshahaabmanzar@gmail.com" id="bootstrap-input" />
                        </FormControl>
                        <div className={classes.display}>
                            <Typography className={classes.titlecolor} variant="h6" gutterBottom>
                                Primary Email Address
                            </Typography>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>mshahaabmanzar@gmail</em>
                                    </MenuItem>
                                    <MenuItem value={10}>mshahaabmanzar@gmail</MenuItem>
                                    <MenuItem value={20}>mshahaabmanzar@gmail</MenuItem>
                                    <MenuItem value={30}>mshahaabmanzar@gmail</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.display}>
                            <Typography className={classes.titlecolor} variant="h6" gutterBottom>
                                Backup Email Address
                            </Typography>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>mshahaabmanzar@gmail</em>
                                    </MenuItem>
                                    <MenuItem value={10}>mshahaabmanzar@gmail</MenuItem>
                                    <MenuItem value={20}>mshahaabmanzar@gmail</MenuItem>
                                    <MenuItem value={30}>mshahaabmanzar@gmail</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
