
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Dashboard from './Dashborad';
import Login from "./Login";


function App() {
  return(
    <AuthProvider>
  <Container
  className = "d-flex align-items-center justify-content-center"
  style = {{ minHeight: "100vh"}}
  >
    
    <div className = "w-100" style = {{maxWidth: "500px"}}>
    <Router>
      <AuthProvider>
        <Switch>
         <Route exact path = "/" component ={Dashboard}></Route>
          <Route path = "/signup" component = {Signup}/>
          <Route path = "/login" component = {Login}/>
          
        </Switch>
      </AuthProvider>
    </Router>
    
    </div>
    
</Container>
</AuthProvider>

  )
}

export default App;
