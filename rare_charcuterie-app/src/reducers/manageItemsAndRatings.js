// import { combineReducers } from "redux";
// import uuid from "uuid";

// const CharcuterieApp =(state = {items: [], ratings: [],loading: false}, action) => {
//     let idx;
//     switch(action.type) {
//         case 'FETCH_RATINGS':
//           return {
//             ...state,
//             items: [...state.items],
//             ratings: [...state.ratings],
//             loading: true
//           }
    
//       case "ADD_RATING":
//         return {
//           ...state,
//           items: [...state.items],
//           ratings: [...state.ratings, action.rating]
//         };
   
//       case "REMOVE_RATING":
//         idx = state.ratings.findIndex(rating => rating.id === action.id);
//         return {
//           ...state,
//           items: [...state.items],
//           ratings: [...state.ratings.slice(0, idx), ...state.ratings.slice(idx + 1)]
//         };
//         case 'FETCH_ITEMS':
//             return {
//               ...state,
//               items: [...state.items],
//               ratings: [...state.ratings],
//               loading: true
//             }
//       case "ADD_ITEM":
//         return {
//           ...state,
//           ratings: [...state.ratings],
//           items: [...state.items, action.item]
//         };
   
//       case "REMOVE_ITEM":
//         idx = state.items.findIndex(item => item.id === action.id);
//         return {
//           ...state,
//           ratings: [...state.ratings],
//           items: [...state.items.slice(0, idx), ...state.items.slice(idx + 1)]
//         };
   
//       default:
//         return state;
//     }
//   }