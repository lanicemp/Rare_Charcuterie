export const fetchItems = () => {
    return (dispatch) => {
        dispatch({type:"LOADING_ITEMS"})
        fetch("http://localhost:3000/api/v1/items")
        .then(response => response.json())
        .then(data => {
          return dispatch({ type: "FETCH_ITEMS", items: data });
        });
    };
  };