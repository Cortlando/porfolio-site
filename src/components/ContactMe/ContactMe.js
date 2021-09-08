import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import './ContactMe.css'
const useStyles = makeStyles((theme) => ({
    logo: {
        fontSize: 100
    }

}));

const ContactMe = () => {
    const classes = useStyles()

    return (
        <div>
            <div className="ContactHeader">
                <Typography variant="h2">
                    Contact Me
                </Typography>
            </div>

            <div className="ContactBody">
                <div className="Email">
                    <div className="EmailLogo">
                        <a href = "mailto: cortlandervins@gmail.com">
                            <Email className={classes.logo} />
                        </a>

                    </div>
                    <div className="EmailText">
                        <Typography variant="h4">
                            cortlandervins@gmail.com
                        </Typography>

                    </div>
                </div>

                <div className="GitHub">
                    <div className="GitHubLogo">
                        <Link href="https://github.com/Cortlando" target="_blank">
                            <GitHub className={classes.logo} />
                        </Link>

                    </div>
                    <div className="GitHubText">
                        <Typography variant="h4">
                            github.com/Cortlando
                        </Typography>

                    </div>

                </div>

                <div className="LinkedIn">
                    <div className="LinkedInLogo">
                        <Link href="https://linkedin.com/in/cortland-ervins/" target="_blank">
                            <LinkedIn className={classes.logo} />
                        </Link>

                    </div>
                    <div className="LinkedInText">
                        <Typography variant="h4">
                            linkedin.com/in/cortland-ervins/
                        </Typography>

                    </div>

                </div>


            </div>
        </div>

    )
}

export default ContactMe