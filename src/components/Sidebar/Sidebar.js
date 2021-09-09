import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


//TODO: Add a list to the drawer with elements from picture
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  
  drawer: {
    width: drawerWidth,
   
  
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
    
  },
  toolbar: theme.mixins.appBar
  
}));

const Sidebar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h5">
            YOOoo
          </Typography>
        </div>

      </Drawer>

    </div>
  )
}

export default Sidebar