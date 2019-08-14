import { FETCH_START, FETCH_SUCESS, FETCH_FAILED } from "./actions"

const initialState = Object.freeze({
  data: [],
  isFetching: false,
  isError: undefined
})

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_SUCESS:
      return {
        ...state,
        data: action.payload,
      }
    case FETCH_FAILED:
      return {
        ...state,
        isError: action.payload,
      }
    default:
      return state
  }
}