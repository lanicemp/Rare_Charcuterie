import React from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import RatingList from "../../components/Rating/RatingList";
import { Carousel, Row, CardColumns, Card, Button } from "react-bootstrap";
// import { fetchRatings } from "../../actions/ratingActions";

class RatingsContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchRatings();
  // }

  render() {
    return (
      <div className='rating_card'>
      <div className='ratings-container'>
        <h2>Reviews</h2>
        <br></br>
        <Carousel>
     
        <CardColumns>
            <Row>
          
        <RatingList ratings={this.props.ratings}/>
       
    
        </Row>
        </CardColumns>
        
        </Carousel>
        
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
   console.log("state for ratings", state);


  return { ratings: state.ratings.ratings };
};

export default connect(mapStateToProps)(RatingsContainer);
