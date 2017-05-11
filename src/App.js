import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-virtualized/styles.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './containers/Main'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'
import {Provider} from 'react-redux'

const loggerMiddleware = createLogger()

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
const store = configureStore()

class App extends Component {

  render() {
  // console.log("App.js store: ", store)
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Swappable Remastered</h2>
          </div>
          <Provider store={store}>
            <Main />
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
