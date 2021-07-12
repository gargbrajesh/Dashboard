import React from "react";
import { List, ListItem, ListItemIcon ,ListItemText} from "@material-ui/core";

import {Dashboard,Book, PostAdd,NotificationsActive,ExitToApp} from "@material-ui/icons"
function SideNavList() {
    const ListItemData =[{label:"Dashboard",icon:<Dashboard />},
    {label:"Blog Post",icon:<Book />},
    {label:"Link 1",icon:<PostAdd />},
    {label:"Notification",icon:<NotificationsActive />},
    {label:"Logout",icon:<ExitToApp />}]
  return (
    <List>
    {ListItemData.map((item,i) =>( <ListItem key={i}>
        <ListItemIcon style={{ color: '#000066' }}>{item.icon}</ListItemIcon>
        <ListItemText>{item.label}</ListItemText>
      </ListItem>))}
     
    </List>
  );
}

export default SideNavList;
