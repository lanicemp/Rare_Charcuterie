import React from "react";

import {Route, Switch} from 'react-router-dom'
// import { fetchItems } from "../../actions/itemActions";
import { connect } from "react-redux";
//it invoke an action I have to connect to redux
import ItemList from "../../components/ItemList/ItemList";
// import { Card, Button } from "react-bootstrap";


class ItemsContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchItems();
  // }

  render() {
    //  debugger
    return (
      <div className='item_card'>
      <div className='items-container'>
     
        
      
        <ItemList items={this.props.items}/>
       
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
   console.log("this is just state for items", state);
//Access to state 
  return { items: state.items.items };
  //Global state is the storage container that holds information to be used by many components. 
  //props are the same as attibutes of an object
  //map = access to anything within the global state
};

export default connect(mapStateToProps)(ItemsContainer);
//connect is connecting react to redux functionality 
// The functionality is access to the global state come from mapStatetoProps aka the first argument(always!!!!)
//and the dispatch function 
//Dispatch funtionality coms from mapdispatchToProps aka the second argument to connect (always!!!!)
