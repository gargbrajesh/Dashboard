import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import "./topbar.css";
import {
  Book,
  PostAdd,
  NotificationsActive,
  ExitToApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="simple_menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon className="menu"></MenuIcon>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Book className="sidebarIcon" />
          <Link to="/Blog"> Blog Post</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PostAdd className="sidebarIcon" />
          <Link to="/link"> Link 1</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NotificationsActive className="sidebarIcon" />
          <Link to="/notification"> Notification</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ExitToApp className="sidebarIcon" />
          <Link to="/logout"> LogOut</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
