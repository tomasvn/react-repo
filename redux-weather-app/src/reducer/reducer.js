import * as type from "../actions"

const initialState = Object.freeze({
  data: {},
  isFetching: false,
  isError: undefined,
})

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case type.FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case type.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case type.FETCH_FAILED:
      return {
        ...state,
        isError: action.payload,
      }
    default:
      return state
  }
}
