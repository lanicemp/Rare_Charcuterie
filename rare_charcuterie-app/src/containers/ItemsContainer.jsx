import React from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import ItemList from "../components/ItemList";
// import { Card, Button } from "react-bootstrap";
import { fetchItems } from "../actions/itemActions";

class ItemsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className='items-container'>
        <ItemList items={this.props.items}/>
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
   console.log("this is just state for menu", state);

  return { items: state.items };
};

export default connect(mapStateToProps, { fetchItems })(ItemsContainer);