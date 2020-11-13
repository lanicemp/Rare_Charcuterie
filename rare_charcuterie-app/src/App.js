import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { fetchItems } from './actions/itemActions';
import ItemsContainer from './containers/ItemsContainer'

class App extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }
  
  render() {
   
    return (
      <div className="App">
        <h1> Rare Chacuterie </h1>
        <ItemsContainer itemPics={this.props.itemPics} />

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

export default connect(mapStateToProps, mapDispatchToProps)(App)
