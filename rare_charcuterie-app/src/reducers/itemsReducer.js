import {FETCH_ITEMS, ADD_ITEM} from '../actions/itemActions';

// state = { items: [], loading: false}
const initialState = {
  items: [],
  searchItems: [],
  loading:false
};
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_ITEMS:
      console.log("in item reducer");
      return { ...state, items: action.payload };

    case ADD_ITEM:
    
        return {...state, items: [...state.items, action.payload]}
        //In each case, the spread syntax expands an iterable object, usually an array, 
        // though it can be used on any interable, including a string.
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
