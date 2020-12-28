import React, { Component} from "react";
import { Card, Button, Modal, Container, Col, Row } from "react-bootstrap";
import ItemModalCard from './ItemModalCard'

class ItemCard extends Component {
  constructor(props) {
    super(props);
    // this.returnViewItem = this.returnViewItem.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    // this.renderItem = this.renderItem.bind(this);

    this.state = {
      showModal: false,
      item_id: null,
      selectedItem: null,
    };
  }

  render() {
      let {item} = this.props
      console.log("in ItemCard")
    return (
      <div className="itemList" id={item.id} data-id={item.id}>
        <Card key={item.id} style={{ width: "25rem" }}>
          <Card.Img key="img" variant="top" src={item.img_url} />
          <Card.Body key="body">
            <h2>{item.name}</h2>
            <h3>$ {item.price}</h3>
            <Button
              data-id={item.id}
              id={item.id}
              value={item.id}
              onClick={<ItemModalCard item = {item}/> }
            >
              {" "}
              View Item{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

  // returnViewItem(e) {
  //   const id = parseInt(e.target.id);
  //   const foundItem = this.props.items.find((item) => item.id === id);
 
  //   this.myRef = React.createRef.bind(id);
  //   console.log(this.props.items);
  //   this.setState({ showModal: true, item_id: id, selectedItem: foundItem });
  //   //create const for all of the items that I want passed in this function.
  //   // const [show, setShow] = useState(false);

  //   // const handleClose = () => setShow(false);
  //   // const handleShow = () => setShow(true);
  //   console.log("im in return view item ");
  //   console.log(e);
  //   console.log(id);

  //   //  console.log(e.currentTarget.id)
  // }
  // render() {
  //   return (
  //     <div>
  //       <div>{this.renderItem()}</div>

  //       {this.state.showModal == true ? this.showModal() : null}
  //       {/* {//if this.showModal is true redirect to showModal function or do nothing with null} */}
  //     </div>
  //   );
  // }

  // handleClose() {
  //   this.setState({ showModal: false });
  // }

  // showModal = () => {
  //   return (
  //     <Modal
  //       //  style={{width: "50rem"} }
  //       size="lg"
  //       show={this.state.showModal}
  //       onHide={() => this.handleClose()}
  //       //the other syntax of onHide ={this.handleClose()} created an error of cannot exceed mximum calls to state
  //       // changing the call to an arrow function allowed me to get pass this because the functions is
  //       //being called in the rended instead of being apart of the render.
  //       backdrop="static"
  //       keyboard={false}
  //     >
  //       <Modal.Header closeButton>
  //         <h2>{this.state.selectedItem.name} </h2>
  //         {console.log(this.state)}
  //       </Modal.Header>
  //       <Modal.Body>{this.renderItem(this.props.item.id)} </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={() => this.handleClose()}>
  //           Close
  //         </Button>
  //       </Modal.Footer>{" "}
  //     </Modal>
  //   );
  // };
 
  // renderItem = (props,item_id) => {
  //   let item = this.props.item
  //   console.log(item)
   
  //   return (
  //     <div className="viewItem" id={item_id} data-id={item_id}>
  //     <Container>
  //     <Row>
  //     <Col xs={9}>
  //         <img key="img" variant="top" src={item.img_url} />
  //         </Col> 
  //         <Col> 
  //         <h2> $ {item.price}</h2>
  //         <h6> Ingredients:  {item.ingredient}</h6>
  //         <h4> Serving Size: {item.size}</h4>
  //         </Col>
  //           {/* <h2>{item.name}</h2>
  //           <h3>$ {item.price}</h3> */}
  //           </Row> 
  //         </Container>
  //     </div>
  //   );
  // };

}

export default ItemCard;
