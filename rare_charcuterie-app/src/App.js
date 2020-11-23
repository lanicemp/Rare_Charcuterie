import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchItems } from "./actions/itemActions";
import { fetchRatings } from "./actions/ratingActions";
import ItemsContainer from "./containers/items/ItemsContainer";
// import RatingsContainer from './containers/Ratings/RatingsContainer';
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Faqs from './components/Faqs/Faqs';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, withRouter } from "react-router-dom";
import AddItem from "./components/AddItem";

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
   
  }
// /* <RatingsContainer ratingComments={this.props.ratingComments}/> */
  render() {
    
    return (
      <div className="App">
        <Header />
        <Navigation/>
        <br></br>
        <Home />
        
        <ItemsContainer ItemList items={this.props.items} />
        <br></br><br></br>
        
        {/* <About/> */}
        <br></br>
        {/* <Faqs/> */}
      <br></br><br></br>
     
      <Contact/>
        <Footer/>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
 
  return {
    items: state.items,
    ratings:state.ratings
    
  };
  
};
const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchRatings: () => dispatch(fetchRatings()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
