import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { fetchItems } from './actions/itemActions';
import ItemList from './components/ItemList';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }
  
  render() {
   
    return (
      <div className="App">
        <h1> Rare Chacuterie </h1>
        <ItemList itemPics={this.props.itemPics} />

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemPics: state.items,
    loading: state.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
//   state = {
//     products: [
//       {name: 'Max', price: 50}, 
//       {name: ' Date', price: 30},
//       {name: 'Single', price: 25}
//     ],
//     otherState: ' some other value'
//   }

// switchNameHandler = (newName) => {
//   this.setState({
//     persons: [
//       {name: newName, price:50},
//       {name: ' Date', price: 30},
//       {name: 'Single', price: 25}
//     ]
//   }) 
   
//   }
//   nameChangedHandler = (event) => {
//     this.setState( {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: event.target.value,  price: 30 },
//         { name: 'Single', price: 25}
//       ]
//     } )
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1> Rare Chacuterie </h1>
//         <p>This is working!</p>
//         <button onClick={()=>this.switchNameHandler('Cheese Board')}>Switch Name</button>
//         <Product
//          name={this.state.products[0].name} 
//          price={this.state.products[0].price}/>
//         <Product
//          name={this.state.products[1].name} 
//          price={this.state.products[1].price}
//          click={this.switchNameHandler.bind(this, 'Max!')} 
//          changed={this.nameChangedHandler} >My Hobbies: Racing</Product>
//         <Product
//          name={this.state.products[2].name} 
//          price={this.state.products[2].price}/>
        
        

//       </div>
//     );
//   }
// }

// export default App;
