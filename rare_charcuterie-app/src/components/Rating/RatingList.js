import React, { Component } from "react";
import { Card, Button, Modal, Carousel } from "react-bootstrap";
import RatingCard from './RatingCard'

const RatingList = ({ratings})=>{
  console.log(ratings)
  return ratings.map((rating) => (rating? <RatingCard rating = {rating}/>: 'Loading...')
  )
}








// class RatingList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   renderRatings = () => {
//     return this.props.ratings.map((rating) => {
//       console.log("line 14 RatingList", rating);
//       return (
//         <div className="reviews">
//           <h3 Reviews />
          
//             <div key={rating.id}>
//               <h2>{rating.comment}</h2>
//             </div>
          
//         </div>
//       );
//     });
//   };
//   render() {
//     return <div>{this.renderRatings()}</div>;
//   }
// }

export default RatingList;
