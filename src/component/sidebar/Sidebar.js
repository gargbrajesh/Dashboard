import "./sidebar.css";
import {
  Book,
  PostAdd,
  NotificationsActive,
  ExitToApp,
} from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Book className="sidebarIcon" />
              <Link to="/Blog"> Blog Post</Link>
            </li>
            <li className="sidebarListItem">
              <PostAdd className="sidebarIcon" />
              <Link to="/Link"> Link 1</Link>
            </li>
            <li className="sidebarListItem">
              <NotificationsActive className="sidebarIcon" />
              <Link to="/Notification"> Notification </Link>
            </li>
            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" />
              <Link to="/LogOut">LogOut</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
