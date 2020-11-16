import React, { Component } from "react";




class RatingList extends React.Component {
  renderRatings = () => {
    return this.props.ratings.map((rating) => {
     console.log(rating)
      return (
        
        <div  key={rating.id} className ="card">
          <h3 Reviews/>
          <div className ="card-body">
            <h2>{rating.comment}</h2>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderRatings()}</div>;
  }
}

export default RatingList;
