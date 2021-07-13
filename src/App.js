import "./App.css";
import { Container } from "@material-ui/core";
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./component/pages/home/Home";
import Footer from "./component/footer/Footer"
import Table_record from "./component/table/Table_record";
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar className= "sidebar"/>
        <div className ="other"><Table_record /></div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
