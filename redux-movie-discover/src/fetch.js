/**
 * Redux thunk action
 * 
 */

import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED, fetchStart, fetchSucess, fetchFailed } from './actions'

const api = () => `https://api.themoviedb.org/3/discover/movie?api_key=a0ed6f7f6d5a52eedd05ecfa82be5478`

export const fetchData = () => {
  return async dispatch => {
    dispatch(fetchStart())
    
    try {
      const req = await fetch(api())
      const res = await req.json()
      dispatch(fetchSucess(res))
      console.log(res)

    } catch {
      dispatch(fetchFailed())
    }
  }
}