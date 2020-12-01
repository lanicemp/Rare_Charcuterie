import React from "react";
import "./Header.css";


class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header>
          <h1> <span>RARE <b>CHARCUTERIE</b></span> </h1>
          {/* <button>Cart</button> */}
        </header>
        <section className="Header-section">
        <button>Cart</button>
        </section>
      

        {/* <button id="sort-dresses">Sort Dresses </button> */}
      </div>
    );
  }
}

export default Header;
