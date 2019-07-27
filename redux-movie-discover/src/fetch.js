/**
 * Redux thunk action
 * 
 * Line 7. we are importing all action creators
 */

import { fetchStart, fetchSucess, fetchFailed } from './actions'

const api = () => `https://api.themoviedb.org/3/discover/movie?api_key=a0ed6f7f6d5a52eedd05ecfa82be5478`

export const fetchData = () => async dispatch => {
  dispatch(fetchStart())

  try {
    const req = await fetch(api())
    const res = await req.json()
    const { results } = res
    dispatch(fetchSucess(results))

  } catch {
    dispatch(fetchFailed())
  }
}