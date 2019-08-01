import { FETCH_NEXT_PAGE, FETCH_PREV_PAGE, FETCH_LOAD_MORE } from '../actions/actions'

const initialState = Object.freeze({
  isVisible: 5,
  isPage: 1,
})

export const fetchPageReducer = (state = initialState, action) {
  switch(action.type) {
    case FETCH_LOAD_MORE:
      return {
        ...state,
        isVisible: state.isVisible += action.payload,
      }
    case FETCH_NEXT_PAGE:
      return {
        ...state,
        isPage: state.isPage += action.payload,
      }
    case FETCH_PREV_PAGE:
      return {
        ...state,
        isPage: state.isPage -= action.payload,
      }
    default:
      return state
  }
}