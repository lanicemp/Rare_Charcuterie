import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer"

//reducers are to hold and manipulate your state and returns your state 
const rootReducer = combineReducers({
  items: itemsReducer,
  // ratings: ratingsReducer
});

export default rootReducer;


// function ratingsReducer(state = [], action) {
//   let idx;
//   switch (action.type) {
//     case "ADD_RATING":
//       return [...state, action.rating];
 
//     case "REMOVE_RATING":
//       idx = state.findIndex(rating => rating.id  === action.id)
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
//     default:
//       return state;
//   }
// }






