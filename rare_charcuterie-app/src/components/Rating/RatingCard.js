import React, { Component } from "react";
import { Card, Button, Modal, Container, Col, Row } from "react-bootstrap";

class RatingCard extends Component {
  constructor(props) {
    super(props);
    // this.returnViewRating = this.returnViewRating.bind(this);
  }
  render() {
    let { rating } = this.props;
    console.log(rating)
    return (
      <div className="reviews" key= {rating.id}>
          <Card>
        <h3 Reviews />

        <div key={rating.id}>
          <h2>{rating.comment}</h2>
        </div>
        </Card>
      </div>
    );
  }
}
export default RatingCard;
