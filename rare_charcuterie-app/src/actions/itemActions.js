export const fetchItems = () => {
  return (dispatch) => {
    // dispatch({type: "FETCH_ITEMS" })
    fetch("http://localhost:3000/api/v1/items")
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        //passing the items to the payload on line 10
        dispatch({ type: "FETCH_ITEMS", payload: items });
        //dispatch sends information to the reducer
        // the inforation is how to manipulate the state.
      });
    console.log("in fetch items");
  };
}; //Actions are the instructions you pass to the reducer

export const addItem = (entry) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_ITEMS" });
    return fetch("http://localhost:3000/api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accepts': "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((resp) => resp.json())
      .then((item) => {
        dispatch({ type: "ADD_ITEM", payload:item });
      });
  };
};
