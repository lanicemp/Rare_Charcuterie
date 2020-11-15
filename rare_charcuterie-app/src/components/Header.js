import React from "react";
import "../styles/Header.css";
import { NavLink } from 'react-router-dom'

class Header extends React.Component {



  render() {
      return (
        <div className="Header">
           <header>
               <h1> Rare Charcuterie </h1>
               
               <button>Cart</button>     
        </header>   
        
              
             
      {/* <button id="sort-dresses">Sort Dresses </button> */}
            
        </div>
      );
    }
  }

  export default Header