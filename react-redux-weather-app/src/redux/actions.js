export const SET_QUERY_VALUE = 'SET_QUERY_VALUE'
export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

export const setQueryValue = payload => ({ type: SET_QUERY_VALUE, payload }) //action creator
export const fetchDataStart = () => ({ type: FETCH_DATA_START }) //action creator
export const fetchDataSuccess = payload => ({ type: FETCH_DATA_SUCCESS, payload }) //action creator
export const fetchDataError = () => ({ type: FETCH_DATA_ERROR }) //action creator

export const fetchData = () => async dispatch => {
  dispatch(fetchDataStart())
  try {
    const req = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res = await req.json()
    dispatch(fetchDataSuccess(res))
  } catch(e) {
    console.error(e)
    dispatch(fetchDataError())
  }
}