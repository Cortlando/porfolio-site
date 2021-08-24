import React from 'react'
import { Container } from '@material-ui/core';
import Portrait from './portrait.jpg'
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';


import { Link } from '@material-ui/core';
import './Header.css'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    picContainer: {
        alignItems: "center",
        justify: "center"

    },
    appBar:{
        position: 'relative',
        zIndex: theme.zIndex.drawer + 1,
        background: "#F79824"
    }
}));


const Header = () => {

    const classes = useStyles()
    return (
        <div className="Header">
            <AppBar className={classes.appBar}>


                <div className="Picture">
                    <Avatar src={Portrait} sizes="large" className={classes.large} />
                </div>
                <div className="ContactInfo">

                    <p> <EmailIcon/>cortlandervins@gmail.com</p>


                    <p> <GitHubIcon/> <a href="https://github.com/Cortlando"> Github </a></p>

                    <p> <LinkedIn/><a href="linkedin.com/in/cortland-ervins">  Linkedin</a>  </p>
                </div>
            </AppBar>
        </div>
    )
}

export default Header