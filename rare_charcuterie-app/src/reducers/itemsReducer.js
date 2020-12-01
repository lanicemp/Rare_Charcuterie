// state = { items: [], loading: false}
const initialState = {
  items: [],
  searchItems: [],
  loading:false
};
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "FETCH_ITEMS":
      console.log("in item reducer");
      return { ...state, items: action.payload };

    case "ADD_ITEM":
      return { ...state, items: state.items.concat({name:action.item})}
    // action.payload is  the return jsonResopnse from rails.

   
    

    // case "REMOVE_ITEM":
    //   idx = state.findIndex(item => item.id  === action.id)
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)];

    // return [...state, action.items];
    default:
      return state;
  }
  
};

export default itemsReducer;
