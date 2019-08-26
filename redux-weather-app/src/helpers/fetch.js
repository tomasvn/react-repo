import { url } from './api'
import { fetchStart, fetchSuccess, fetchFailed } from '../actions'

export const fetchData = (city, code) => async dispatch => {
  dispatch(fetchStart())

  try {
    const res = await fetch(url(city, code))
    const data = await res.json()
    dispatch(fetchSuccess(data))
  
  } catch(e) {
    dispatch(fetchFailed(e.message))
  }
}