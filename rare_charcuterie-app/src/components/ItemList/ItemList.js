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
  constructor(props) {
    super(props);
    this.returnViewItem = this.returnViewItem.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      showModal: false,
      item_id: null,
      //this.state is false so that the modal will not be shown initially.
      // We had to set state becuse the only way to rerender is when state is changed.
      // the state lets react know when to re-render
    };
  }
  renderItems = () => {
    return this.props.items.map((item) => {
      console.log(document.getElementById);

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
                onClick={this.returnViewItem}
              >
                {" "}
                View Item{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  renderItem = (item_id) => {
    return (
      <div className="itemList" id={item_id} data-id={item_id}>
        <Card key={item_id} style={{ width: "25rem" }}>
          {/* <Card.Img key="img" variant="top" src={item.img_url} /> */}
          <Card.Body key="body">
            {/* <h2>{item.name}</h2>
            <h3>$ {item.price}</h3> */}
            <Button
              data-id={item_id}
              id={item_id}
              value={item_id}
              // onClick={this.returnViewItem}
            >
              {" "}
              View Item{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  handleClose() {
    this.setState({ showModal: false });
  }
  returnViewItem(e) {
    const id = e.target.id;
    this.setState({ showModal: true, item_id: id });
    //create const for all of the items that I want passed in this function.
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    console.log("im in return view item ");
    console.log(e);
    console.log(id);

    //  console.log(e.currentTarget.id)
  }
  render() {
    // debugger

    return (
      <div>
        <div>{this.renderItems()}</div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.handleClose()}
          //the other syntax of onHide ={this.handleClose()} created an error of cannot exceed mximum calls to state
          // changing the call to an arrow function allowed me to get pass this because the functions is
          //being called in the rended instead of being apart of the render.
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            {this.state.item_id} In View Item
          </Modal.Header>
          <Modal.Body> {this.renderItem(this.state.item_id)} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>{" "}
        </Modal>
      </div>
    );
  }
}

export default ItemList;
