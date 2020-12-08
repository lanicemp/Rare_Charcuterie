import React, { Component } from "react";
import {addItem} from "../../actions/itemActions"

class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ingredient: "",
      price: 0,
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
    this.setState({ name: "" }, { ingredient: "" },{price: 0},{size: ""},
      {img_url: ""} );
  };
  componentDidMount() {
    if (this.props.item) {
      const { attributes } = this.props.item;
      this.setState({
        name: attributes.name,
        ingredient: attributes.ingredient,
        price: attributes.price,
        size: attributes.size
      });
    }
  }

  render() {
    let { name, ingredient } = this.state;
    return (
      <div>
        Add New Item
        <form onSubmit={this.handleOnSubmit}>
          <label>Item Name </label>
          <input
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
            value={this.state.price}
            onChange={this.handleOnChange}
          />
          <br></br>
          <label>Size </label>
          <input
            type="text"
            name="size"
            size="size"
            placeholder="enter the size"
            value={this.state.size}
            onChange={this.handleOnChange}
          />
          <br></br>
          <input type="submit" value="Add Item" />
        </form>
      </div>
    );
  }
}

export default ItemInput;
