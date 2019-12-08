import { combineReducers } from 'redux'
import { ajaxReducer } from './ajax'
import { authenticationReducer } from './authentication'

export const reducer = combineReducers(
  {
    ajax: ajaxReducer,
    authentication: authenticationReducer
  }
)
