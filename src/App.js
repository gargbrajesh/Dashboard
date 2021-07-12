
import './App.css';
import { Container} from "@material-ui/core";
import Topbar from './component/topbar/Topbar'
import Sidebar from './component/sidebar/Sidebar'
import Home from "./component/pages/home/Home"
function App() {
 
  return (
   
      <Container>
      <div>
        <Topbar />
        <div className ="container">
          <Sidebar />
          <Home />
        </div>
        </div>
      </Container>

  );
}

export default App;
