import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { fetchItems } from "../../actions/itemActions";
//removing the imports above because Im passing it down to the props in the container 
import "./ItemList.css";

class ItemList extends Component {
 
  renderItems = () => {
    return this.props.items.map((item) => {
      console.log("line 9")
      return (
        
         
          <div className="itemList">
            <div className="card" key={item.id}>
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
  // debugger
    return <div>{this.renderItems()}</div>;
  }
}

export default ItemList;
