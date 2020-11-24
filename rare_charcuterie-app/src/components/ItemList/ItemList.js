import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import AddItem from "../AddItem";

import Navigation from "../Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, Button, Modal, Container } from "react-bootstrap";

// import { connect } from 'react-redux';
// import { fetchItems } from "../../actions/itemActions";
//removing the imports above because Im passing it down to the props in the container
import "./ItemList.css";

class ItemList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.returnViewItem = this.returnViewItem.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showModal: false,
      item_id: null,
      selectedItem: null,

      //this.state is false so that the modal will not be shown initially.
      // We had to set state becuse the only way to rerender is when state is changed.
      // the state lets react know when to re-render
    };
  }
  renderItems = () => {
    return this.props.items.map((item) => {
      // console.log(document.getElementById);

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

  handleClose() {
    this.setState({ showModal: false });
  }

  showModal = () => {
    return (
      <Modal
        //  style={{width: "50rem"} }
        show={this.state.showModal}
        onHide={() => this.handleClose()}
        //the other syntax of onHide ={this.handleClose()} created an error of cannot exceed mximum calls to state
        // changing the call to an arrow function allowed me to get pass this because the functions is
        //being called in the rended instead of being apart of the render.
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {this.state.selectedItem.name} In View Item
          {console.log(this.state)}
        </Modal.Header>
        <Modal.Body>{this.renderItem(this.state.item_id)} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleClose()}>
            Close
          </Button>
        </Modal.Footer>{" "}
      </Modal>
    );
  };
  returnViewItem(e) {
    const id = parseInt(e.target.id);
    const foundItem = this.props.items.find((item) => item.id === id);
    debugger;
    this.myRef = React.createRef.bind(id);
    console.log(this.props.items);
    this.setState({ showModal: true, item_id: id, selectedItem: foundItem });
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
    return (
      <div>
        <div>{this.renderItems()}</div>

        {this.state.showModal == true ? this.showModal() : null}
        {/* {//if this.showModal is true redirect to showModal function or do nothing with null} */}
      </div>
    );
  }

  renderItem = (props, item_id) => {
    console.log(item_id);
    console.log(props);
    return (
      <div className="viewItem" id={item_id} data-id={item_id}>
          <Card key={item_id} style={{ width: "25rem" }}>
          <Card.Body key="body">
          <Card.Img key="img" variant="top" src={this.state.selectedItem.img_url} />
          
            {/* <h2>{item.name}</h2>
            <h3>$ {item.price}</h3> */}
            
            </Card.Body>
           </Card>
      </div>
    );
  };
}

export default ItemList;
