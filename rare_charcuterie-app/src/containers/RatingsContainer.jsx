import React from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import RatingList from "../components/RatingList";
// import { Card, Button } from "react-bootstrap";
import { fetchRatings } from "../actions/ratingActions";

class RatingsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRatings();
  }

  render() {
    return (
      <div className='rating_card'>
      <div className='ratings-container'>
        <RatingList ratings={this.props.ratings}/>
       
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
   console.log("this is just state for ratings", state);

  return { ratings: state.ratings };
};

export default connect(mapStateToProps, { fetchRatings })(RatingsContainer);
