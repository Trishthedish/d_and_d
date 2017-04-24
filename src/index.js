import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Using an ES6 transpiler like Babel
import {SortableComponent, SortableElement} from 'react-sortable-hoc';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'


const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
