import React from "react";
import Home from "../Home";
import RatingsContainer from "../../containers/Ratings/index";
import contact, { Contact } from "../Contact/index";
import about, { About } from "../About/index";
import faqs, { Faqs } from "../Faqs/index";
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
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Faqs">FAQs</Link>
              </li>
              <li>
              <Link to ="/artisan_shoppe">Artisan Shoppe</Link>
              </li>
              <li>
              <Link to ="/Catering_Events">Catering & Events</Link>
              </li>
              <li>
              {/* <Link to ="../AddItem"></Link> */}
              </li>
            </ul>
          </nav>

          <Switch>
          <Route exact path="/"  />
          </Switch>
         
          <Switch>
            <Route exact path="/Faqs" component={Faqs} />
          </Switch>
          <Switch>
            <Route exact path="/Contact" component={Contact} />
          </Switch>
          <Switch>
            <Route exact path="/About" component={About} />
          </Switch>
          {/* <Switch>
            <Route exact path="../AddItem" component={AddItem} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default Navigation;
