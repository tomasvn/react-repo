/**
 * Actions are just plain objects, they have two props such as type and payload
 * 
 * for example: 
 * {
 *  type: FETCH_START (type is a string which is stored in constant)
 *  payload: payload
 * }
*/

/**
 * Below we are defining our action types, and we set them to a contants.
 * Why? To prevent mistyping those string values, when we define action types in reducers
 * Use action creators? Create function that returns the action object, so we dont have to call the object itself
 * 
 * Eg.const fetchStart = () => ({ type: FETCH_START })
 */

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
export const FETCH_LOAD_MORE = 'FETCH_LOAD_MORE'
export const FETCH_NEXT_PAGE = 'FETCH_NEXT_PAGE'
export const FETCH_PREV_PAGE = 'FETCH_PREV_PAGE'

export const fetchLoadMore = payload => ({ type: FETCH_LOAD_MORE, payload })
export const fetchStart = () => ({ type: FETCH_START })
export const fetchSucess = payload => ({ type: FETCH_SUCCESS, payload })
export const fetchFailed = () => ({ type: FETCH_FAILED })
export const fetchNextPage = payload => ({ type: FETCH_NEXT_PAGE, payload })
export const fetchPrevPage = payload => ({ type: FETCH_PREV_PAGE, payload })