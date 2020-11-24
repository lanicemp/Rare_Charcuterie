// state = { ratings: [], loading: false }, action
const initialState = {
  ratings: [],
  searchRatings:[],
  loading:false
};

const ratingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_RATINGS":
        console.log("in rating reducer");
        return { ...state, ratings: action.payload };

        case "ADD_RATINGS":
          return {
            ...state,
            ratings: [...state.ratings, action.payload]
          };
        // return [...state, [...state.ratings]];
       
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
       
      default:
        return state;
    }
  };
  export default ratingsReducer;
  