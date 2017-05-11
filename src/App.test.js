import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './containers/Main'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
