import React from "react";
import "../styles/Navigation.css";


class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigaiton">
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
