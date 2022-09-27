import React from 'react'

import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import './Home.css'
const useStyles = makeStyles((theme) => ({
    picture: {
        width: theme.spacing(40),
        height: theme.spacing(40)
    },


}));



const Home = () => {
    const classes = useStyles()
    return (
        <div>

            <div className="HomeBody">
                <div className="HomeTitleContainer">
                    <div className="HomeTitleImg">
                        <Avatar alt="Cortland Ervins" src={process.env.PUBLIC_URL + './portrait.jpg'} className={classes.picture} />
                    </div>
                    <div className="HomeTitle">
                        <Typography variant="h1">
                            CORTLAND ERVINS
                        </Typography>
                        <Typography variant="h1">
                            PORTFOLIO
                        </Typography>

                    </div>
                </div>

                <div className="summary">
                    <Typography variant="h4">
                        Hello!<br></br>I am a Software Engineer at Amdocs and a full stack developer in my freetime, looking for the next step in my career.
                        I have experience in front-end and back-end development.

                    </Typography>


                </div>


            </div>
        </div >
    )
}

export default Home