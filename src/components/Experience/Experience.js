import React from 'react'
import Header from '../Header/Header'
import { Typography } from '@material-ui/core'
const Experience = () => {

    return (
        <div>
            <Header />
            <div className="ExperienceBody">
                <div className="WorkOne">
                    <div className="WorkOneText">
                        <Typography variant="h2">
                            January - August 2020
                        </Typography>
                        <Typography variant="h3">
                            Full Stack Developer Internship with Discover Financial Services
                        </Typography>
                        <Typography variant="h6">
                            I worked in a team of six developers with one scrum master(all interns), 
                            where we created applications using React.js and SpringBoot. <br></br>
                        </Typography>
                        <Typography variant="h4">
                            Covid-19 Tracker
                        </Typography>
                        <Typography variant="h5">
                            My Team and I created a web application to track Covid-19 cases across the world. When looking at cases within the United States, cases could be sorted by state.<br></br>
                            The data needed for the site was obtained through various APIs and was displayed with charts and graphs <br></br>
                            The application was developed using React.js and Node.js along with Chart.js and material-ui
                        </Typography>


                        
                        <Typography variant="h4">
                            Intern Database Manager
                        </Typography>
                        <Typography variant="h5">
                            This application was made to allow a user to quickly view and edit a database containg the information of every Discover intern in the Code_Orange program. <br></br>
                            Users could add interns to the database,  edit information about interns(email, phone number, etc...), and remove them from the database <br></br>
                            The Interns in the database would be organized into tables in the app, and users could sort through them in various ways.(alphabetically, by location, amount of years in program, etc...)
                        </Typography>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Experience