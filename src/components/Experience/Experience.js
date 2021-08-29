import React from 'react'
import Header from '../Header/Header'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import './Experience.css'
const Experience = () => {

    return (
        <div>
            <div className="ExperienceHeader">
                <Typography variant="h2">
                    Work Experience
                </Typography>
            </div>
            <div className="ExperienceBody">
                <div className="WorkOne">
                    <div className="WorkOneText">
                        <div className="WorkOneTextTitle">
                            <Typography variant="h2">
                                Full Stack Developer Internship with Discover Financial Services
                            </Typography>
                            <div className="WorkOneTextTitleDate">
                                <Typography variant="h3">
                                    January - August 2020
                                </Typography>
                            </div>

                        </div>


                        <Typography variant="h6">
                            I worked in a team of six developers with one scrum master(all interns),
                            where we created applications using React.js and SpringBoot. <br></br>
                        </Typography>



                        <div className="Projects">
                            <div className="ProjectOne">
                                <div className="ProjectOneHeader">
                                    <Typography variant="h4" >
                                        Covid-19 Tracker
                                    </Typography>
                                </div>
                                <div className="ProjectOneImg">
                                    <img id="ProjectOneImg" src={process.env.PUBLIC_URL + '/ProjectOneImage.png'} alt="Image of Covid-19Tracker" />
                                </div>
                                <div className="ProjectOneText">
                                    <Typography variant="h5">
                                        My Team and I created a web application that let the user track Covid-19 cases across the world. When looking at cases within the United States, cases could be sorted by state.<br></br>
                                        The data needed for the site was obtained through various APIs and was displayed with charts and graphs <br></br>
                                        The application was developed using React.js and Node.js along with Chart.js and Material-Ui
                                    </Typography>
                                </div>
                                <div className="ProjectOneButtons">
                                    <div className="ProjectOneRepo">
                                        <Button href="https://github.com/Cortlando/Covid-19-Tracker" variant="contained" color="secondary" size="large">
                                            Repo
                                        </Button>
                                    </div>
                                </div>

                            </div>

                            <div className="ProjectTwo">
                                <div className="ProjectTwoHeader">
                                    <Typography variant="h4">
                                        Intern Database Manager
                                    </Typography>
                                </div>
                                <div className="ProjectTwoImg">
                                    <img id="ProjectTwoImg" src={process.env.PUBLIC_URL + '/ProjectTwoImage.png'} alt="Image of Intern Database Manager"/>
                                </div>

                                <div className="ProjectTwoText">
                                    <Typography variant="h5">
                                        This application was made to allow a user to quickly view and edit a database containg the information of every Discover intern in the Code_Orange program. <br></br>
                                        Users could add interns to the database,  edit information about interns(email, phone number, etc...), and remove them from the database <br></br>
                                        The Interns in the database would be organized into tables in the app, and users could sort through them in various ways.(alphabetically, by location, amount of years in program, etc...)<br></br>
                                        This application was developed using React.js and SpringBoot
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Experience