// import React, { Component } from "react";
// import { connect } from "react-redux";
// import {
//   Card,
//   Col,
//   Row,
//   CardGroup,
//   CardColumns,
//   Button,
//   Modal,
// } from "react-bootstrap";

//  ViewItem extends React.Component {
//   ViewItem = (e) => {
//     console.log(e);
//     const item_id = parseInt(e.currentTarget.id);
//     debugger;
//     const item = document.getElementById(item_id);

//     const item_attribute = item.getAttribute(item_id);
//     debugger;
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
   
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>In View Item</Modal.Header>
//           <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           </Modal.Footer>
//         </Modal>
     
//     );
//   };
// }

// export default ViewItem;
