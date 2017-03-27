import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Using an ES6 transpiler like Babel
import {SortableComponent, SortableElement} from 'react-sortable-hoc';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
