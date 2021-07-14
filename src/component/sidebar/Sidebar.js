import "./sidebar.css";
import {
  Book,
  PostAdd,
  NotificationsActive,
  ExitToApp,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Book className="sidebarIcon" />
              Blog Post
            </li>
            <li className="sidebarListItem">
              <PostAdd className="sidebarIcon" />
              link1
            </li>
            <li className="sidebarListItem">
              <NotificationsActive className="sidebarIcon" />
              Notification
            </li>
            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" />
              LogOut
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
