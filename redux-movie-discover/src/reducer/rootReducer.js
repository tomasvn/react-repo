import { combineReducers } from 'redux'
import { fetchPageReducer } from './fetchPageReducer'
import { fetchDataReducer } from './fetchDataReducer'

export const rootReducer = combineReducers({
  fetchDataReducer,
  fetchPageReducer,
})