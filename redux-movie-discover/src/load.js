import { fetchLoadMore } from './actions'

export const loadMore = () => {
  return dispatch => {
    dispatch(fetchLoadMore(5))
  }
}