import React from 'react'
import Box from '@mui/material/Box'
import { AppBar } from '@mui/material'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    position: 'fixed',
    display: 'inline-block',

    

})

const Header = () => {



    return (
        <Box>
            <ThemeProvider theme={theme}> 
                <AppBar >
                    <Stack spacing={2} direction="row">
                        <a href="#HomeSection">
                            <Button>Home</Button>
                        </a>
                        <a href="#SkillsSection">
                            <Button>Skills</Button>
                        </a>
                        <a href="#ExperienceSection">
                            <Button>Experience</Button>
                        </a>
                        <a href="#PersonalProjectSection">
                            <Button>Personal Project</Button>
                        </a>
                        <a href="#ContactMeSection">
                            <Button>Contact Me</Button>
                        </a>
                    </Stack>
                </AppBar>
            </ThemeProvider>

        </Box>
    )

}

export default Header