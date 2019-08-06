/**
 * Redux thunk action
 * 
 * Line 7. we are importing all action creators
 */

import { fetchStart, fetchSucess, fetchFailed, fetchPage } from '../actions/actions'
import { api } from './api'

export const fetchData = () => async dispatch => {
  dispatch(fetchStart())

  try {
    const req = await fetch(api())
    const res = await req.json()
    const { results, page } = res
    dispatch(fetchPage(page))
    dispatch(fetchSucess(results))

  } catch {
    dispatch(fetchFailed())
  }
}