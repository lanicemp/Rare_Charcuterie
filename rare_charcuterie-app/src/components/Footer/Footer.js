import React from "react";



class Footer extends React.Component {

  render() {
      return (
        <div className ='footer' >
           <footer>
           <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        </footer>   
              
             
      {/* <button id="sort-dresses">Sort Dresses </button> */}
            
        </div>
      );
    }
  }

  export default Footer