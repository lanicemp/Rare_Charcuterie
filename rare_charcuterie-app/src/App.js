import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchItems } from "./actions/itemActions";
import { fetchRatings } from "./actions/ratingActions";
import ItemsContainer from "./containers/items/ItemsContainer";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Faqs from './components/Faqs/Faqs';
import Contact from './components/Contact/Contact'
import RatingsContainer from './containers/Ratings/RatingsContainer';
import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  // componentDidMount() {
  
  //   this.props.fetchItems();
   
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Navigation/>
        <Home />
        <ItemsContainer itemPics={this.props.itemPics} />
        <br></br><br></br>
        <RatingsContainer ratingComments={this.props.ratingComments}/>
        <br></br><br></br>
        <Faqs/>
      <br></br><br></br>
      <Contact/>
        <Footer/>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    ratings:state.ratings
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchRatings: () => dispatch(fetchRatings()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
