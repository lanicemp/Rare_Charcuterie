import React, {Component } from "react";

class ItemList extends React.Component {
  renderItems = () => {
     
    return this.props.items.map(item => <img src={item.img_url} />)
  };
  render() {
    return( <div>{this.renderItems()}</div>)
  }
}
export default ItemList; 