import {combineReducers} from 'redux';

import {UPDATE_NAME} from '../actions'

const UPDATE_ENGINE = 'define me in actions'

export const ENGINES = {
  ALL: 'all',
  GOOGLE: 'google',
  BING: 'bing'
}

function main(state={name: "", engine: 'all'}, action){

  switch(action.type) {
    case UPDATE_NAME :
    return {
      name: action.name,
      engine: state.engine // stays the same...
    }

    case UPDATE_ENGINE:
      // fill me in
      return state
  default:
    return state
  }
}
 const appState = combineReducers({
   main
 })

export default appState
