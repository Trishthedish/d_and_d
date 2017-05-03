import React, { Component } from 'react';
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
// import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtons from '../components/RaisedButton'
// import './App.css';
// import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
// import PropTypes from 'prop-types';

// Needed for onTouchTap, so error goes away
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {connect} from 'react-redux'
import {updateName, updateEngine, updateModal, updateEditingRule} from '../actions'
import RulesTable from '../components/RulesTable'
import RuleEditModal from '../components/RuleEditModal'

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
  // editModalHandler = (editModalVisibility) => {
  //   const dispatch = this.props.dispatch
  //   let act = updateModal(editModalVisibility)
  //   dispatch(act)
  // }
   render() {
     return (
       <div>
           <div className="top-btn-grp-filter">
             <RaisedButtons
               engine={this.props.engine}
               foobarHandler={this.engineChangeHandler}/>
             <p>
               This is curent engine === {this.props.engine}
             </p>
           </div>
           <h1 className="App-intro"> The Rules Table</h1>
           <RulesTable
             engine={this.props.engine}
             rules={this.props.rules}
             onRuleEdit={(ruleId) => this.props.dispatch(updateModal(true, ruleId))}
           />
           <RuleEditModal
           editModalVisibility={this.props.editModalVisibility}
           rule={this.props.editingRule}
           onRuleEdit={
             (field, value) => {
               this.props.dispatch(updateEditingRule(field, value))
             }
           }
          onRuleSave={() => console.log('Save rule action') }
         />
       </div>
     )
   }
 }
function MapStateToProps(state) {
  const name = state.main.name
  const {
    engine, rules, editModalVisibility, editingRuleId,
    editingRule
  } = state.main
  console.log("this is state: ", state, "<<<")
  return {
    name, engine, rules, editModalVisibility, editingRuleId, editingRule
  }
}

export default connect(MapStateToProps)(Main)
