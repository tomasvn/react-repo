import { fetchLoadMore } from '../actions/actions'

export const loadMore = () => dispatch => dispatch(fetchLoadMore(5))
