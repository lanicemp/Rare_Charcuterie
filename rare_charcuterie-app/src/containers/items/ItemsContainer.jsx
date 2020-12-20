import React, {Componet} from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch, withRouter } from "react-router-dom";
import { addItem } from "../../actions/itemActions";
import {fetchItems} from "../../actions/itemActions"
//it invoke an action I have to connect to redux
import ItemInput  from '../../components/ItemList/ItemInput'
import ItemList from "../../components/ItemList/ItemList";
import {  Row,  CardColumns, Button } from "react-bootstrap";

class ItemsContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchItems();
  // }
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addItem(this.state);
    // this.setState({id:""},{ name: "" }, { ingredient: "" },{price: 0},{size: ""},
    //   {img_url:""} );
  };
  // nextPath(path) {
  //   this.props.history.push(path);
  // }
 
  // generateItems = () => this.props.items.map((item, index)=> <li key={index}>{item.name}</li> )

  render() {
    //  debugger
    
    return (
      <div className="item_card">
        <div className="items-container">
          <h2> Rare Products </h2>
          {/* <ItemInput addItem={this.addItem} items={this.props.items}/> */}
          <Router>
           <Link to = '/ItemInput'> Add Item </Link > 
             <Switch>
            <Route exact path="/ItemInput" component={ItemInput} />
          </Switch>
           </Router> 
          <CardColumns>
            <Row>
              <ItemList items={this.props.items} />
            </Row>
          </CardColumns>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state for items", state);
  //Access to state
  return { items: state.items.items };
  //Global state is the storage container that holds information to be used by many components.
  //props are the same as attibutes of an object
  //map = access to anything within the global state
};
const mapdispatchToProps = dispatch => {
  return {
    addItem: () => dispatch(addItem())
  }

 }
//  componentDidUpdate(prevProps) {
//   if (this.props.items === prevProps.items) {
//     return true;
//   }
// }

export default withRouter(connect(mapStateToProps, mapdispatchToProps )(ItemsContainer));
//connect is connecting react to redux functionality
// The functionality is access to the global state come from mapStatetoProps aka the first argument(always!!!!)
//and the dispatch function
//Dispatch funtionality comes from mapdispatchToProps aka the second argument to connect (always!!!!)
