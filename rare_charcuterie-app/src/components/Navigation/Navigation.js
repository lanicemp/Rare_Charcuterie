import React from "react";
import Home from "../Home";
import faqs, { Faqs } from "../Faqs/index"
import contact, {Contact} from "../Contact/index"
import RatingsContainer from "../../containers/Ratings/index"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Navigation.css";


class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div className="Navigaiton">
          <nav>
            <ul>
              <li>
              <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Reviews "> Reviews</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link to="/About">About</Link>
              </li>
              <li>
              <Link to="/Faqs">FAQs</Link>
              </li>
              <li>
                <a href="/artisan_shoppe">Artisan Shoppe</a>
              </li>
              <li>
                <a href="/Catering_Events">Catering & Events</a>
              </li>
            </ul>
          </nav>

          <Switch>
          {/* <Route exact path="/Reviews" component ={RatingsContainer}/> */}
        </Switch>
        <Switch>
          <Route exact path="/Faqs" component ={Faqs}/>
        </Switch>
      <Switch>
          <Route exact path="/Contact" component ={Contact}/>
        </Switch>
        </div>
      </Router>
    );
  }
}






export default Navigation;
