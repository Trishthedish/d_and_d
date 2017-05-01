import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
// import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtons from '../components/RaisedButton'
// import './App.css';
// import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
import PropTypes from 'prop-types';

// Needed for onTouchTap, so error goes away
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {connect} from 'react-redux'
import {updateName, updateEngine, updateModal} from '../actions'
import RulesTable from '../components/RulesTable'

class Main extends Component {
  nameChangeHandler = (event) =>  {
    const dispatch = this.props.dispatch
    let act = updateName(event.target.value)
    dispatch(act)
  }
  engineChangeHandler = (engineName) => {
    // console.log('engineChangeHandler:', engineName)
    // return // todo remove me

    const dispatch = this.props.dispatch
    let act = updateEngine(engineName)
    dispatch(act)
  }
   render() {
     return (
     <div>
       <h1>Hello World</h1>
       <div>
         <input value={this.props.name} onChange={this.nameChangeHandler}/>
         <p>HELLLOOOO: {this.props.name} !</p>
       </div>

       <div>
         {/*
   <RaisedButtonExampleSimple/>
    <div><SortableComponent/></div>
           */}

         <h1 className="App-intro"> The Rules Table</h1>

         <div>
           <RaisedButtons engine={this.props.engine} foobarHandler={this.engineChangeHandler}/>
           <p>THis is curent engine === {this.props.engine}</p>
         </div>

         <RulesTable
           engine={this.props.engine}
           rules={this.props.rules}
           />
       </div>
     </div>
   )

   }
 }
function MapStateToProps(state) {
  const name = state.main.name
  const {engine, rules} = state.main
  console.log("this is state: ", state)
  return {
    name, engine, rules
  }
}

export default connect(MapStateToProps)(Main)
