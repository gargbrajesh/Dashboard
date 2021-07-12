
import {React,useState} from 'react'
import { Typography,Drawer,makeStyles,Hidden } from '@material-ui/core';
import SideNavList from './SideNavList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:5,
    spacing: 4,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
     
     
    },
    margin:{  marginTop: theme.spacing(4),}
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop:68,
  },
 
}));
function SideNav() {
    const [mobileOpen ,setMoblieOpen] =useState(false)
    const handleDrawerToggle = () =>{
        setMoblieOpen(!mobileOpen)
    };
    const classes = useStyles();
    return (
        <nav className={classes.drawer,classes.margin} aria-label="mailbox folders" >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
       <SideNavList />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
           <SideNavList />
          </Drawer>
        </Hidden>
      </nav>
    )
}

export default SideNav
