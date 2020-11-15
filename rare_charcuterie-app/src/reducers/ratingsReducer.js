const ratingsReducer = (state = { ratings: [], loading: false }, action) => {
    switch (action.type) {
      case "FETCH_RATINGS":
        console.log("in rating reducer");
        return {
          ...state,
          ratings: [...state.ratings],
          loading: true,
        };
      case "ADD_RATINGS":
        return {
          ...state,
          ratings: action.ratings,
          loading: false,
        };
      default:
        return state;
    }
  };
  export default ratingsReducer;
  