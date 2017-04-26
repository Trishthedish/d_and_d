import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtons from '../components/RaisedButton'
// import './App.css';
// import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel

import {connect} from 'react-redux'
import {updateName} from '../actions'


class Main extends Component {
  nameChangeHandler = (event) =>  {
    const dispatch = this.props.dispatch
    let act = updateName(event.target.value)
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
           <div><RaisedButton/></div>


       </div>
     </div>
   )

   }
 }
function MapStateToProps(state) {
  const name = state.main.name
  console.log("this is state: ", state)
  return {
    name
  }
}

export default connect(MapStateToProps)(Main)
