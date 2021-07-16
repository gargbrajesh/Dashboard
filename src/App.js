import "./App.css";
// import { Container } from "@material-ui/core";
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import Footer from "./component/footer/Footer";
import Table_record from "./component/table/Table_record";
import Home from "./component/pages/home/Home";
import Link from "./component/pages/link page/Link";
import Blog from "./component/pages/blog post/Blog";
import Notification from "./component/pages/notification/Notification";
import LogOut from "./component/pages/logout/LogOut";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  let isLogged = false;
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <div className="container_child1">
            <Sidebar className="sidebar" />
          </div>
          <div className="container_child2">
            <Switch>
              <Route exact path="/" component={Table_record} />
              <Route exact path="/blog" component={Blog} />

              <Route exact path="/link" component={Link} />
              <Route exact path="/notification" component={Notification} />

              <Route exact path="/logout" component={LogOut}>
                {isLogged ? <Redirect to="/dashboard" /> : <Table_record />}
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
