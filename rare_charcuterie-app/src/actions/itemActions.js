export const fetchItems = () => {
    return (dispatch) => {
     
        dispatch({type:"FETCH_ITEMS"})
        fetch("http://localhost:3000/api/v1/items")
        .then(response => response.json())
        .then(data => {
          console.log("in fetch items")
          console.log(data)
          return dispatch({ type: "ADD_ITEMS", items: data });
        });
    };
  };