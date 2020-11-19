// state = { items: [], loading: false} 
const itemsReducer = (state = { items: [], loading: false} , action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      debugger 
      console.log("in item reducer");
       return {...state, items:action.payload };
     // action.payload is  the return jsonResopnse from rails. 
  
    // case "ADD_ITEMS":
      // return {
      //   ...state,
      //   items: action.items,
      //   loading: false,
      // };
      // case "ADD_ITEM":
      //   return [...state, action.item];
   
      // case "REMOVE_ITEM":
      //   idx = state.findIndex(item => item.id  === action.id)
      //   return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      // return [...state, action.items];
    default:
      return state;
  }
};

export default itemsReducer;
