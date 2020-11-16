import React, { Component } from "react";
import "./ItemList.css";

class ItemList extends React.Component {
  renderItems = () => {
    return this.props.items.map((item) => {
      console.log("in item list");
      console.log(item);
      return (
        <div className="itemList">
          <h2> Rare Products</h2>
          <div className="card"key={item.id} >
            <img src={item.img_url} />
            <div className="card-body">
              <h2>{item.name}</h2>

              <p>
                {item.size} <br></br> {item.price}
              </p>
            </div>
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
