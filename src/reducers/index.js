import {combineReducers} from 'redux';

import {UPDATE_NAME} from '../actions'

function main(state={name: ""}, action){

  switch(action.type) {
    case UPDATE_NAME :
    return {
      name: action.name
    }
  default:
    return state
  }
}
 const appState = combineReducers({
   main
 })

export default appState
