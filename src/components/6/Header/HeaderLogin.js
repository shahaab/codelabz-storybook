import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    navbar: {
        backgroundColor: 'white',
    },
    title: {
        color: 'black',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        color: 'black',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.05),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, 0.15),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
    },
    app:{
        color: 'black',
        fontSize:'40px',
        margin: theme.spacing(1),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function HeaderLoggedIN() {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Codelabz
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search???"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <AppsIcon className={classes.app} />
                            <Avatar>H</Avatar>
                        </Grid>

                    </div>
                    <div className={classes.sectionMobile}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <AppsIcon sx={{ color:'black', fontSize:'40px' }}/>
                            <Avatar>H</Avatar>
                        </Grid>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    );
}
