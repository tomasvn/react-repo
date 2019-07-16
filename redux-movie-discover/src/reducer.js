import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from './actions'

const initialState = Object.freeze({
  data: [],
  isLoading: false,
  isError: false,
})
