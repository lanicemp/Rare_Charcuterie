import cuid from "cuid";
export const cuidFn = cuid;

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
    
        return {...state, items: [...state.items, action.payload]}
    // const item = {
    //   id: cuidFn(),
    //   name: action.payload.name, 
    //   ingredient: action.payload.ingredient
    // }
    //   return {...state, items: [state.items.concat(item)]};
    // action.payload is  the return jsonResopnse from rails.
    //the spread operator populates an array with previous data

   
    

    // case "REMOVE_ITEM":
    //   idx = state.findIndex(item => item.id  === action.id)
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)];

    // return [...state, action.items];
    default:
      return state;
  }
  
};

export default (itemsReducer)
