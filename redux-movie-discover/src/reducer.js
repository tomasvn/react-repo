/**
 * 1. We are returning an state object
 * 2. Make sure to return to always return default state
 */

/**
 * Importing action types, which we use in switch()
 */
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from './actions'

/**
 * Initial State we pass in reducer, and set default value for state
 */
const initialState = Object.freeze({
  data: [],
  isLoading: false,
  isError: false,
})

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return { //1.
        ...state,
        isLoading: true
      }
    case FETCH_SUCCESS:
      return { //1.
        ...state,
        data: action.payload
      }
    case FETCH_FAILED:
      return { //1.
        ...state,
        isError: true
      }
    default: //2.
      return state
  }
}
