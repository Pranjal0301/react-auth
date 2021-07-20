
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Dashboard from './Dashborad';
import Login from "./Login";
import Loginsucess from "../Loginsucess";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

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
         <PrivateRoute exact path = "/" component ={Dashboard}></PrivateRoute>
          <Route path = "/signup" component = {Signup}/>
          <Route path = "/login" component = {Login}/>
          <PrivateRoute path = "/loginsucess" component = {Loginsucess}/>
          <Route path = "/forgot-password" component = {ForgotPassword}/>
        </Switch>
      </AuthProvider>
    </Router>
    
    </div>
    
</Container>
</AuthProvider>

  )
}

export default App;
