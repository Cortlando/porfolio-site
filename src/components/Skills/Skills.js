import React from 'react'
import { Typography } from '@material-ui/core'

import './Skills.css'
const Skills = () => {

    return (
        <div>

            <div className="SkillsHeader">
                <div className="TechSkillsHeader">
                    <Typography variant="h2">
                        Technical Skills
                    </Typography>

                </div>
                <div className="SoftSkillsHeader">
                    <Typography variant="h2">
                        Soft Skills
                    </Typography>

                </div>
            </div>

            <div className="SkillsBody">

                <div className="SkillsLogos">


                    <div className="Row">
                        <div className="SkillsChild C">
                            <div className="CImage">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ logo" />
                            </div>
                            <Typography variant="h4">
                                C++
                            </Typography>

                        </div>
                        <div className="SkillsChild Git">
                            <div className="GitImage">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Git-icon-black.svg/1200px-Git-icon-black.svg.png" alt="Git-icon-black.svg" />
                            </div>
                            <Typography variant="h4">
                                Git
                            </Typography>

                        </div>
                    </div>

                    <div className="Row">
                        <div className="SkillsChild React">
                            <div className="ReactImage">
                                <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React Logo" />
                            </div>
                            <Typography variant="h4">
                                React
                            </Typography>

                        </div>

                        <div className="SkillsChild MySQL">
                            <div className="MySQLImage">
                                <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="MySQL Logo" />
                            </div>
                            <Typography variant="h4">
                                MySQL
                            </Typography>

                        </div>
                    </div>

                    <div className="Row">
                        <div className="SkillsChild Java">
                            <div className="JavaImage">
                                <img src="https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png" alt="Java Logo" />
                            </div>
                            <Typography variant="h4">
                                Java
                            </Typography>

                        </div>

                        <div className="SkillsChild Spring">
                            <div className="SpringImage">
                                <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Logo" />
                            </div>
                            <Typography variant="h4">
                                Spring
                            </Typography>

                        </div>
                    </div>


                </div>

                <div className="SoftSkills">
                    <Typography variant="h4">
                        <ul>

                            <li>Able to learn new skills and technologies quickly</li>
                            <li>Effective And Intentional Communicator</li>

                            <li>Able to quickly intergrate and working effectively in a team</li>
                        </ul>
                    </Typography>
                </div>



            </div>
        </div>

    )

}

export default Skills