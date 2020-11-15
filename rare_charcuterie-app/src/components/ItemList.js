import React, { Component } from "react";


class ItemList extends React.Component {
  renderItems = () => {
    return this.props.items.map((item) => {
      return (

        <div class="card"  >

         <img key={item.id} src={item.img_url} />
         <div class="card-body">
          <h2>{item.name}</h2>
         
          <p>{item.size} <br>
          </br> {item.price}
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
