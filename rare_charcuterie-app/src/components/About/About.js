import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <br></br>
        <h2> About Us </h2>
        <br></br>
        <Container fluid>
          <Row>
            <Col >
              <img src="https://pbs.twimg.com/media/Doza8g1V4AApiMH.jpg" />
            </Col>

            <Col xs >
              <h3>Meet LaSaundra Powell</h3>
              <p> The CEO of Rare Charcuterie,  She has </p>
            </Col>
          </Row>
        </Container>
        {/* <button id="sort-dresses">Sort Dresses </button> */}
      </div>
    );
  }
}

export default About;
