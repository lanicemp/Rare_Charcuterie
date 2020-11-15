import React, { Component } from "react";




class RatingList extends React.Component {
  renderRatings = () => {
    return this.props.ratings.map((rating) => {
      return (
        <div class="card">
          <h3 key={rating.id} src={rating.comment}/>
          <div class="card-body">
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
