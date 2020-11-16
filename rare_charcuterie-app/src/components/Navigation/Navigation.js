import React from "react";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navigation.css";
import App from "../../App";

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div className="Navigaiton">
          <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="Reviews "> Reviews</Link>
              </li>
              <li>
              <Link to="contact">Contact</Link>
              </li>
              <li>
              <Link to="about">About</Link>
              </li>
              <li>
              <Link to="faqs">FAQs</Link>
              </li>
              <li>
                <a href="#artisan_shoppe">Artisan Shoppe</a>
              </li>
              <li>
                <a href="#faqs">Catering & Events</a>
              </li>
            </ul>
          </nav>

          <Switch>
          <Route path="/Ratings" component ={App}/>
           
       
          <Route path="/">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}




function Ratings() {
  return <h2>RatingList</h2>;
}

function Users() {
return <p> Users</p>
}
export default Navigation;
