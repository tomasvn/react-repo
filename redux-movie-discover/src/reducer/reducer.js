/**
 * 1. We are returning an state object
 * 2. Make sure to always return default state
 */

/**
 * Importing action types, which we use in switch()
 */
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED, FETCH_LOAD_MORE } from '../actions/actions'

/**
 * Initial State we pass in reducer, and set default value for state
 */
const initialState = Object.freeze({
  data: [],
  isLoading: false,
  isError: false,
  isVisible: 5,
})

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return { //1.
        ...state,
        isLoading: true,
        isError: false
      }
    case FETCH_SUCCESS:
      return { //1.
        ...state,
        isLoading: false,
        data: action.payload
      }
    case FETCH_LOAD_MORE:
      return {
        ...state,
        isVisible: state.isVisible += action.payload,
      }
    case FETCH_FAILED:
      return { //1.
        ...state,
        isLoading: false,
        isError: true
      }
    default: //2.
      return state
  }
}
