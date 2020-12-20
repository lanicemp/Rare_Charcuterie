import React, { Component } from "react";
import cuid from "cuid";
import { connect } from "react-redux";
import {addItem} from '../../actions/itemActions'
import { Card, Button, Modal, Container, Col,Row } from "react-bootstrap";

export const cuidFn = cuid;

class ItemInput extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id:cuid(),
      name: "",
      ingredient: "",
      price: "",
      size: "",
      img_url: ""
    };
    // this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    //   let target = e.target;
    //   let value =  target.value;
    //   let name = target.name;
    //   // const ingredient = target.ingredient
    //   this.setState(

    //     {[name]: value
    //       // [ingredient]:value
    //  }
    //   );
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addItem(this.state);
    // this.setState({id:""},{ name: "" }, { ingredient: "" },{price: 0},{size: ""},
    //   {img_url:""} );
  };
  componentDidMount() {
    if (this.props.item) {
      const { attributes } = this.props.item;
      this.setState({
        name: attributes.name,
        ingredient: attributes.ingredient,
        price: attributes.price,
        size: attributes.size,
        img_url: attributes.img_url
      });
    }
  }

  render() {
    let { name, ingredient, price, size, img_url } = this.state;
    return (
      <div classname="itemInput">
        Add New Item
        <form id="add-form" onSubmit={this.handleOnSubmit}>
          <label>Item Name </label>
          <input
          id= "create"
            type="text"
            name="name"
            placeholder="enter a new name"
            value={name}
            onChange={this.handleOnChange}
          />
          <br></br>
          <label>Ingredients </label>
          <input
            type="text"
            name="ingredient"
            placeholder="enter a ingredients"
            value={ingredient}
            onChange={this.handleOnChange}
          />
          <br></br>
          <label>Price </label>
          <input
            type="number"
            name="price"
            placeholder="enter a price"
            value={price}
            onChange={this.handleOnChange}
          />
          <br></br>
          <label>Size </label>
          <input
            type="text"
            name="size"
            placeholder="enter the size"
            value={size}
            onChange={this.handleOnChange}
          />
          <br></br>
          <label>Image </label>
          <input
          type="text"
          name= "img_url"
          value={img_url}
          onChange={this.handleOnChange}
          />
          <br></br>


          <input type="submit" value="Add Item" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {addItem}


export default connect(null, mapDispatchToProps)(ItemInput);
//Added the connect to connect the reducers with this compnent

