import React, { Component } from "react";

class ItemList extends React.Component {
  renderItems = () => {
    return this.props.items.map((item) => {
      return (
        <div class="" >
          <h2>{item.name}</h2>
          <img key={item.id} src={item.img_url} />
          <p>{item.size} <br>
          </br> {item.price}
           </p>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderItems()}</div>;
  }
}
export default ItemList;
