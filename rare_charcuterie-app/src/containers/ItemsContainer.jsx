import React from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import ItemList from "../components/ItemList/ItemList";
// import { Card, Button } from "react-bootstrap";
import { fetchItems } from "../actions/itemActions";

class ItemsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
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

  return { items: state.items };
};

export default connect(mapStateToProps, { fetchItems })(ItemsContainer);
