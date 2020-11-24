export const fetchRatings = () => {
    return (dispatch) => {
     
        // dispatch({type:"FETCH_RATINGS"})
        fetch("http://localhost:3000/api/v1/ratings")
        .then((response) => {
          return response.json();
        })
        .then((ratings) => {
          //passing the items to the payload on line 10
          dispatch({ type: "FETCH_RATINGS", payload: ratings });
          //dispatch sends information to the reducer
          // the inforation is how to manipulate the state.
        });
        console.log('in fetch ratings')
    };
  };