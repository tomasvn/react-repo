import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from '../actions/actions'

const initialState = Object.freeze({
  data: [],
  isLoading: false,
  isError: false,
})

export const fetchDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case FETCH_FAILED:
      return {
        ...state,
        isError: true,
      }
    default:
      return state
  }
}