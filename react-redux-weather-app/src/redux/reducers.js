import { initialState } from '../state/initialState'
import { SET_QUERY_VALUE, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actions'

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_QUERY_VALUE:
      return {
        ...state,
        query: action.payload
      }
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isFetching: false
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    default:
      return state
  }
}