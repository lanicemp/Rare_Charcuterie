import React, { Component } from 'react'

class ItemInput extends Component {
state = {
  name: ""
}

handleOnChange = e => {
  this.setState({
    name: e.target.value
  })
}

handleOnSubmit = e => {
  e.preventDefault();
  this.props.addItem(this.state.name)

this.setState({
  name:""
})
}




  render() {
    return(
      <div>
        Item Input
        <form onSubmit={this.handleOnSubmit}>
          <label>Item Name </label>
          <input type= 'text'
          name = "name"
          placeholder= "enter a new name"
          value = {this.state.name}
          onChange= { this.handleOnChange}/>
          <input type = "submit" value = "Add Item"/>
        </form>
      </div>
    )
  }
}

export default ItemInput
