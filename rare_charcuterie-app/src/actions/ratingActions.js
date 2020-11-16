export const fetchRatings = () => {
    return (dispatch) => {
     
        // dispatch({type:"FETCH_RATINGS"})
        fetch("http://localhost:3000/api/v1/ratings")
        .then(response => response.json())
        .then(payload => {
          console.log(payload)
          return dispatch({ type: "FETCH_RATINGS", payload });
        });
    };
  };