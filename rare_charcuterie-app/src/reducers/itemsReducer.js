// state = { items: [], loading: false 
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      console.log("in item reducer");
      state.push({...action.payload})
      // return [...state, [...state.items]];
      return state
      // {
      //   ...state,
      //   items: [...state.items],
      //   loading: true,
      // };
    // case "ADD_ITEMS":
      // return {
      //   ...state,
      //   items: action.items,
      //   loading: false,
      // };
      return [...state, action.items];
    default:
      return state;
  }
};
export default itemsReducer;
