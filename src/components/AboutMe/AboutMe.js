import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    text:{
        display: "block"
    }
}));

const AboutMe = () =>{
    const classes = useStyles()
    return(
        <div>
            <Typography variant="h5" class={classes.text}>
            <p>
                Hello, my name is Cortland Ervins and I am a <h5>frontend</h5> <h4>/</h4> <h5>fullstack</h5> developer. I am a recent graduate of Northern Illinois University
                and I want to 
            </p>
            </Typography>

        </div>
    )
}

export default AboutMe