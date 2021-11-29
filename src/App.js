import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home/Home";
import UpdateUser from "./Showdata/UpdateUser";

function App() {
 
  return (
    <Router>
      <div className="container">
        <nav>
          {/* <ul>
            <li>
               <Link to="/home">Home</Link> 
            </li>
         
           
           
          </ul> */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
      
          <Route path="/">
            <Home />
          </Route>
          <Route path="/update">
            <UpdateUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
