import {combineReducers} from 'redux';

import {UPDATE_NAME, UPDATE_ENGINE} from '../actions'

export const ENGINES = {
  ALL: 'all',
  GOOGLE: 'google',
  YAHOO: 'yahoo',
  BING: 'bing'
}

function main(state={name: "", engine: 'all'}, action){

  switch(action.type) {
    case UPDATE_NAME:
    return Object.assign({}, state,{name: action.name})

    case UPDATE_ENGINE:
    // fill me in
      return Object.assign({}, state, {engine: action.engine})

    default:
    return state
  }
}
const appState = combineReducers({
  main
})

export default appState
