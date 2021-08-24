import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Header.css'

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    picContainer: {
        alignItems: "center",
        justify: "center"

    },
    appBar: {
        position: 'relative',
        display: 'inline-block',

        background: "#F79824"
    }
}));


const Header = () => {

    const classes = useStyles()
    return (
        <div className="Header">
            <AppBar className={classes.appBar}>
                <Link to="/">
                    <Button> Home </Button>
                </Link>

                <Link to="/Contact">
                    <Button> Contact Me </Button>
                </Link>

                <Link to="/Experience">
                    <Button> Work Experience </Button>
                </Link>

                <Link to="/Skills">
                    <Button> Skills </Button>
                </Link>

                <Link to="/Projects">
                    <Button> Projects </Button>
                </Link>
            </AppBar>
        </div>
    )
}

export default Header