import { fetchLoadMore } from '../actions/actions'

export const loadMore = () => {
  return dispatch => {
    dispatch(fetchLoadMore(5))
  }
}