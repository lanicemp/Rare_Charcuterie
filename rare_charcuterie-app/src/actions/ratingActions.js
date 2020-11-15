export const fetchRatings = () => {
    return (dispatch) => {
     
        dispatch({type:"FETCH_RATINGS"})
        fetch("http://localhost:3000/api/v1/ratings")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          return dispatch({ type: "ADD_RATINGS", ratings: data });
        });
    };
  };