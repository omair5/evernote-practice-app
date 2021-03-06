import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'block',
        [theme.breakpoints.between('xs', 'sm')]: {
            textAlign: 'center',
            padding: '5px'
        },
    },
    searchPosition: {
        display: 'flex',
        justifyContent: 'end'
    },
    search: {
        position: 'relative',
        right: '0 px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '60%',
        [theme.breakpoints.down('md')]: {
            marginBottom: '10px',
            width: '100%',
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
    },
}));

function Navbar() {
    // ------------------LOGIC
    const classes = useStyles();
    const myNotes = useSelector((state) => state.myNotes)
    const inputValue = useSelector((state) => state.inputValue)
    const dispatch = useDispatch()
    const HandleFilter = (valueForFilter) => {
        dispatch({ type: 'update value', payload: valueForFilter })
        if (valueForFilter === '') {
            dispatch({ type: 'empty search array', payload: [] })
        }
        else {
            dispatch({ type: 'searched array', payload: myNotes.filter((value) => value.title.toLowerCase().includes(valueForFilter.toLowerCase())) })
        }
    }

    // ------------------USER INTERFACE
    return (
        <div className={classes.root}>
            {console.log('this is text Navbar component')}

            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6} >
                            <Typography className={classes.title} variant="h6" noWrap>
                                EVERNOTE APP
                            </Typography>
                        </ Grid>
                        <Grid item xs={12} md={6} >
                            <div className={classes.searchPosition}>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Filter Your Note By Title..."
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        fullWidth={true}
                                        value={inputValue}
                                        onChange={(e) => HandleFilter(e.target.value)}
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default React.memo(Navbar) 
