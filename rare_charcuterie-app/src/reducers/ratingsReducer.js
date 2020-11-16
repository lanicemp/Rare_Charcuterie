// state = { ratings: [], loading: false }, action
const ratingsReducer = (state =  [], action) => {
    switch (action.type) {
      case "FETCH_RATINGS":
        console.log("in rating reducer");
        state.push({...action.payload})
        // return [...state, [...state.ratings]];
        return state;
        // {
        //   ...state,
        //   ratings: [...state.ratings],
        //   loading: true,
        // };
      // case "ADD_RATINGS":
        // return {
        //   ...state,
        //   ratings: action.ratings,
        //   loading: false,
        // };
        return [...state, action.ratings];
      default:
        return state;
    }
  };
  export default ratingsReducer;
  