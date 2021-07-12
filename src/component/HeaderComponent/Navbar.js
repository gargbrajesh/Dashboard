import React from "react";
import { makeStyles, AppBar, Toolbar, Typography,Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginRight: theme.spacing(1),
        // color: "red",
      },
}));
export default function Navbar() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
    <AppBar style={{ background: '#000066' }}>
      <Toolbar>
        <Typography variant="h6" className={classes.root}>
         Dashboard
        </Typography>
        <Button color="inherit" >LogOut</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
}


