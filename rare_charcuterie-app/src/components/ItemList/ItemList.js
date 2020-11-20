import React, { Component } from "react";
import AddItem from "../AddItem";
import Navigation from "../Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, Col, Row, CardGroup, CardColumns,  } from "react-bootstrap";

// import { connect } from 'react-redux';
// import { fetchItems } from "../../actions/itemActions";
//removing the imports above because Im passing it down to the props in the container
import "./ItemList.css";

class ItemList extends Component {
  renderItems = () => {
    return this.props.items.map((item) => {
      console.log("line 9");
      return (
        <div className="itemList">
          {/* <CardColumns> */}
            
            {/* <Row> */}
              <Card style={{ width: "25rem" }}>
                {/* <div className="card" key={item.id}> */}
                <Card.Img variant= "top"
                  src={item.img_url}
                  // onClick={
                  //   <Router>
                  //     <Link to={AddItem} />
                  //     <Switch>
                  //       <Route exact path="../AddItem" component={AddItem} />
                  //     </Switch>
                  //   </Router>
                  // }
                />
                <Card.Body>
                {/* <div className="card-body"> */}
                  <h2>{item.name}</h2>
                  <p>
                    {item.size} <br></br> {item.price}
                  </p>
                {/* </div> */}
                </Card.Body>
                {/* </div> */}
              </Card>
            {/* </Row> */}
          {/* </CardColumns> */}
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
