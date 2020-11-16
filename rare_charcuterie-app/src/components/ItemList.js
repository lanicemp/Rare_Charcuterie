import React, { Component } from "react";
import "../styles/ItemList.css";

class ItemList extends React.Component {
  renderItems = () => {
    return this.props.items.map((item) => {
      console.log(item);
      return (
        <div key={item.id} className="card">
          <img src={item.img_url} />
          <div className="card-body">
            <h2>{item.name}</h2>

            <p>
              {item.size} <br></br> {item.price}
            </p>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderItems()}</div>;
  }
}
export default ItemList;
