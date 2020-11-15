import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchItems } from "./actions/itemActions";
import ItemsContainer from "./containers/ItemsContainer";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navigation/>
        <body>
        <Home />
        <ItemsContainer itemPics={this.props.itemPics} />
        <br></br>
        </body>
        <Footer/>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
