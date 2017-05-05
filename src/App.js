import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

// import ActionAndroid from 'material-ui/svg-icons/action/android';
// import FontIcon from 'material-ui/FontIcon';
// import {red500, yellow500, blue500, greenA200} from 'material-ui/styles/colors';
// import google_icon from '../src/google_icon.png';
// import yahoo_icon from '../src/yahoo_icon.png';
// import bing_icon from '../src/bing_icon.png';
import Main from './containers/Main'
// import {emojify} from 'react-emojione';
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

// const engineIcon = {
//   width: '41px',
//   height: '40px',
//   padding: '4px',
// }

// const iconStyles = {
//   fontSize: '48px',
//   height: 40,
// };

const buttonStyle = {
  margin: 12,
}

class App extends Component {

  render() {
      console.log("App.js store: ", store)
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Swappable Remastered</h2>
        </div>
        <div>
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
