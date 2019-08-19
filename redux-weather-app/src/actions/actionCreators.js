import * as types from './actions'

export const fetchStart = () => ({ type: types.FETCH_START })
export const fetchSuccess = payload => ({ type: types.FETCH_SUCCESS, payload })
export const fetchFailed = payload => ({ type: types.FETCH_FAILED, payload })