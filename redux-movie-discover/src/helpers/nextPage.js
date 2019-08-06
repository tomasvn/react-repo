import { fetchNextPage } from '../actions/actions'
import { fetchData } from './fetch'

export const nextPage = () => dispatch => dispatch(fetchNextPage(1))