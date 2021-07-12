
import './App.css';
  // import Header from './component/Header';
 import { Container, ThemeProvider } from "@material-ui/core";
 import Header from './component/HeaderComponent/Header';
import BodyData from './component/BodyComponent/BodyData';
function App() {
 
  return (
   
      <Container>
        <Header />
        <BodyData />
      </Container>

  );
}

export default App;
