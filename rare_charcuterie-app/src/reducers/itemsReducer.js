const itemsReducer = (state = { items: [], loading: false }, action) => {
    switch(action.type) {
      case 'FETCH_ITEMS':
        console.log('in item reducer')
        return {
          ...state,
          items: [...state.items],
          loading: true
        }
        case 'ADD_ITEMS':
      return {
        ...state,
        items: action.items,
        loading: false
      }
    default:
      return state;
  }
}
export default itemsReducer;