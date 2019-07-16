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
*/

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
