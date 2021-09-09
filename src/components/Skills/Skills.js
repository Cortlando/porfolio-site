import React from 'react'
import Header from '../Header/Header'
import { Typography } from '@material-ui/core'

import './Skills.css'
const Skills = () => {
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry =>{
    //         if(entry.isIntersecting){
    //             entry.target.classList.add('.logoEntrance')
    //         }
    //     })
    // });

    // observer.observe(document.querySelector('.SkillsBody'))

    return (
        <div>

            <div className="SkillsHeader">
                <Typography variant="h2">
                    Skills
                </Typography>

            </div>
            <div className="SkillsBody">


                <div className="SkillsChild C">
                    <div className="CImage">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ logo" />
                    </div>
                    <Typography variant="h3">
                        C++
                    </Typography>

                </div>
                <div className="SkillsChild Git">
                    <div className="GitImage">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Git-icon-black.svg/1200px-Git-icon-black.svg.png" alt="Git-icon-black.svg" />
                    </div>
                    <Typography variant="h3">
                        Git
                    </Typography>

                </div>
                <div className="SkillsChild React">
                    <div className="ReactImage">
                        <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React Logo" />
                    </div>
                    <Typography variant="h3">
                        React
                    </Typography>

                </div>

                <div className="SkillsChild MySQL">
                    <div className="MySQLImage">
                        <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="MySQL Logo" />
                    </div>
                    <Typography variant="h3">
                        MySQL
                    </Typography>

                </div>

                <div className="SkillsChild Java">
                    <div className="JavaImage">
                        <img src="https://cdn.worldvectorlogo.com/logos/java.svg" alt="Java Logo" />
                    </div>
                    <Typography variant="h3">
                        Java
                    </Typography>

                </div>

                <div className="SkillsChild Spring">
                    <div className="SpringImage">
                        <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Logo" />
                    </div>
                    <Typography variant="h3">
                        Spring
                    </Typography>

                </div>
            </div>
        </div>

    )

}

export default Skills