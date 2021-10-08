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
                        <Typography variant="h4" style={{ fontWeight: 600 }}>
                            Chat Room App
                        </Typography>
                    </div>
                    <div className="PersonalProjectRow">
                        <div className="PersonalProjectOneImg">
                            <img id="PersonalProjectOneImage" src="https://user-images.githubusercontent.com/48654220/133151718-2f23adc7-d313-40d8-b3d8-fc0f084efa8d.gif" alt="Chat Room App" />
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
                    </div>

                    <div className="PersonalProjectOneButtons">
                        <div className="PersonalProjectOneRepo">
                            <Button href="https://github.com/Cortlando/chat-room-app " variant="contained" color="secondary" size="large" target="_blank" style={{ backgroundColor: "#463728" }}>
                                Repo
                            </Button>
                        </div>
                        <div className="PersonalProjectOneLink">
                            <Button href="https://cortlando.github.io/chat-room-app-frontend/#/" variant="contained" color="secondary" size="large" target="_blank" style={{ backgroundColor: "#463728" }}>
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