export const fetchItems = () => {
    return (dispatch) => {
     
        // dispatch({type:"FETCH_ITEMS"})
        fetch("http://localhost:3000/api/v1/items")
        .then(response => response.json())
        .then(payload => {
          console.log("in fetch items")
          console.log(payload)
          return dispatch({ type: "FETCH_ITEMS", payload });
        });
    };
  };