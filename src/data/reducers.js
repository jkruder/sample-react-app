import { combineReducers } from 'redux'
import Sets from '../sets'

const rootReducer = combineReducers({
  ...(Sets.reducers)
})

export default rootReducer
