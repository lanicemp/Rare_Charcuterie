import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { fetchItems } from './actions/itemActions';
import ItemsContainer from './containers/ItemsContainer'
import Home from './components/Home'
import Header from './components/Header'
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }
      
  render() {
   
    return (
      
      <div className="App">
       <Header/>
        <ItemsContainer itemPics={this.props.itemPics} />
        <Route exact path='/' component={Home}></Route>

      </div>
      
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
    
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
