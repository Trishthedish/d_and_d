import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtons from '../components/RaisedButton'
// allegedly 'PropTypes' import statement is necessary, but addding it doesn't make warning go away.
// import PropTypes from 'prop-types';
// injectTapEventPlugin: necessary for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {connect} from 'react-redux'
import {
  updateEngine, updateEditModal, updateEditingRule,
  saveEditRule, closeEditModal, updateAddModal, deleteRule } from '../actions'

import RulesTable from '../components/RulesTable'
import RuleEditModal from '../components/RuleEditModal'

class Main extends Component {
  engineChangeHandler = (engineName) => {
    // console.log('engineChangeHandler:', engineName)
    const dispatch = this.props.dispatch
    let act = updateEngine(engineName)
    dispatch(act)
  }
  addRuleHandler = (event) => {
    const dispatch = this.props.dispatch
    let act = updateAddModal()
    dispatch(act)
  }
  deleteRuleHandler = (ruleId) => {
    const dispatch = this.props.dispatch
    let act = deleteRule()
    dispatch(act)
  }

   render() {
     return (
       <div>
           <div className="top-btn-grp-filter">
             <RaisedButtons
               engine={this.props.engine}
               filterHandler={this.engineChangeHandler}/>
           </div>

          <div className="add-rule-btn-container">
            <RaisedButton
               className="add-rule-btn"
               backgroundColor="#B149C6"
               label="Add Rule Button"
               labelColor="#fff"
               onTouchTap={this.addRuleHandler} />
           </div>


           <h1 className="App-intro"> The Rules Table</h1>
           <section className="table-container">
             <RulesTable
               engine={this.props.engine}
               rules={this.props.rules}
               onEditRule={(ruleId) => this.props.dispatch(updateEditModal(true, ruleId))}
               onRuleDelete={this.deleteRuleHandler}
              />
           </section>

           <RuleEditModal
             editModalVisibility={this.props.editModalVisibility}
             rule={this.props.editingRule}
             onEditRule={
               (field, value) => {
                 this.props.dispatch(updateEditingRule(field, value))
               }
             }
            onEditRuleSave={
              () => {
                this.props.dispatch(saveEditRule())
              } }
            onEditRuleCancel={
              () => {
                this.props.dispatch(closeEditModal())
              }}/>
       </div>
     )
   }
 }


function MapStateToProps(state) {
  const {
    engine, rules, editModalVisibility, editingRuleId,
    editingRule, updateEditModal, updateEditingRule,
    saveEditRule, closeEditRule, updateAddModal, deleteRule
  } = state.main
  // console.log("this is state: ", state, "<<<")
  return {
    engine, rules, editModalVisibility, editingRuleId,
    editingRule, updateEditModal, updateEditingRule,
    saveEditRule, closeEditRule, updateAddModal,deleteRule
  }
}

export default connect(MapStateToProps)(Main)
