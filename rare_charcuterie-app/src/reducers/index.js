import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import ratingsReducer from './ratingsReducer'

export default combineReducers({
  items: itemsReducer,
  ratings: ratingsReducer
})