import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

class SortableComponent extends Component {
  state = {
    rules: [
      {name: "rule1", color: "blue"},
      {name: "rule2", color: "blue"},
      {name: "rule3", color: "blue"},
      {name: "rule4", color: "blue"}
    ]
  };
  onSortEnd = ({oldIndex, newIndex}) => {
     this.setState({
       rules: arrayMove(this.state.rules, oldIndex, newIndex),
     });
   };
   render() {
    return <SortableList rules={this.state.rules} onSortEnd={this.onSortEnd} />;
  }

}

const SortableList = SortableContainer(
  (state) => {

    const {rules} = state

    return (

      <p className="ruleTable">
        {rules.map((value, index) => (
          <SortableItem key={`rule-${index}`} index={index} value={value} />
        ))}
      </p>
    );
  }
)

const SortableItem = SortableElement(({value}) =>
  <tr>
    <td className="td_box">
      {value.name}
    </td>
    <td className="td_box">
      {value.color}
    </td>
  </tr>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div><SortableComponent/></div>
      </div>
    );
  }
}
// /Users/trishgriego/practice/d_and_d/src/index.js
//error  'SortableComponent' is not defined  react/jsx-no-undef
export default App;
