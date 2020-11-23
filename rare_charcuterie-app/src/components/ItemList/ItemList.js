import React, { Component, useState } from "react";

import AddItem from "../AddItem";

import Navigation from "../Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, Button, Modal } from "react-bootstrap";

// import { connect } from 'react-redux';
// import { fetchItems } from "../../actions/itemActions";
//removing the imports above because Im passing it down to the props in the container
import "./ItemList.css";

class ItemList extends Component {
  
  returnViewItem = () => {
    

    return (
      //  The Modal -->
      <div id="myModal" class="modal">
        {/* <!-- Modal content --> */}
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    );
  };
 

  renderItems = () => {
    return this.props.items.map((item) => {
      console.log(document.getElementById);

      // debugger
      return (
        <div className="itemList" id={item.id} data-id={item.id}>
          <Card key={item.id} style={{ width: "25rem" }}>
            <Card.Img key="img" variant="top" src={item.img_url} />
            <Card.Body key="body">
              <h2>{item.name}</h2>
              <h3>$ {item.price}</h3>
              <Button
                data-id={item.id}
                id={item.id}
                value={item.id}
                onClick={this.returnViewItem()}
              > View Item </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };
  render() {
    // debugger
    return <div>{this.renderItems()}</div>;
  }
}

export default ItemList;
