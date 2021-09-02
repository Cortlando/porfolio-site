import { Button, Typography } from '@material-ui/core'
import React from 'react'

import './PersonalProject.css'
const PersonalProject = () => {
    return (
        <div>
            <div className="PersonalProjectHeader">
                <Typography variant="h2">
                    Personal Project
                </Typography>
            </div>
            <div className="PersonalProjectBody">
                <div className="PersonalProjectOne">
                    <div className="PersonalProjectOneHeader">
                        <Typography variant="h3">
                            Chat Room App
                        </Typography>
                    </div>
                    <div className="PersonalProjectOneImg">
                        <img id="PersonalProjectOneImage" src={process.env.PUBLIC_URL + '/ChatRoomApp.png'} alt="Picture of the Chat Room App" />
                    </div>
                    <div className="PersonalProjectOneText">
                        <Typography variant="h5">
                            <ul>
                                <li>This application lets users create and join chat rooms</li>
                                <li>Users can create an account or link their Google, Twitter, or facebook account.</li>
                                <li>This project was created using React.js, Node.js, and Socket.io</li>
                            </ul>
                        </Typography>
                    </div>
                    <div className="PersonalProjectOneButtons">
                        <div className="PersonalProjectOneRepo">
                            <Button href="https://github.com/Cortlando/chat-room-app " variant="contained" color="secondary" size="large">
                                Repo
                            </Button>
                        </div>
                        <div className="PersonalProjectOneLink">
                            <Button href="https://cortlando.github.io/chat-room-app-frontend/#/" variant="contained" color="secondary" size="large">
                                Link
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProject