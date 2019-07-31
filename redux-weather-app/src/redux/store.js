import { createStore, compose, applyMiddleware } from 'redux'
import { reducer } from './reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export const store = createStore(reducer, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

/**
 * Middleware - mezikrok mezi vyvolanim akce a mezi provedenim akce, umi akci stopnout, umi do akce neco pridat, a pokracuje v akci
 */