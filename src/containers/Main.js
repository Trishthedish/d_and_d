import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtons from '../components/RaisedButton'
// import PropTypes from 'prop-types'; to make error message go away
// Needed for onTouchTap, so error goes away
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {connect} from 'react-redux'
import {
  updateEngine,

  updateEditModal, updateEditingRule,
  saveEditRule, closeEditModal,

  updateAddModal, updateAddingRule,
  saveAddRule, closeAddModal } from '../actions'

import RulesTable from '../components/RulesTable'
import RuleEditModal from '../components/RuleEditModal'
import RuleAddModal from '../components/RuleAddModal'

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

           <RaisedButton
               backgroundColor="#B149C6"
               label="Add Rule Button"
               labelColor="#fff"
               onTouchTap={this.addRuleHandler} />

           <RuleAddModal
             addModalVisibility={this.props.addModalVisibility}
             onAddRule={
               (field, value) => {
                 this.props.dispatch(updateAddingRule(field, value))
               }
             }
             onAddRuleSave={
               () => {this.props.dispatch(saveAddRule())
               }}
             onAddRuleCancel={
               () => {this.props.dispatch(closeAddModal())
               }}/>
           <h1 className="App-intro"> The Rules Table</h1>
           <section className="table-container">
             <RulesTable
               engine={this.props.engine}
               rules={this.props.rules}
               onEditRule={(ruleId) => this.props.dispatch(updateEditModal(true, ruleId))}
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
    editingRule, addModalVisibility, updateEditModal, updateEditingRule,
    saveEditRule, closeEditRule, updateAddModal, updateAddingRule,
    saveAddRule, closeAddModal,
  } = state.main
  console.log("this is state: ", state, "<<<")
  return {
    engine, rules, editModalVisibility, editingRuleId,
    editingRule, addModalVisibility, updateEditModal, updateEditingRule,
    saveEditRule, closeEditRule, updateAddModal, updateAddingRule,
    saveAddRule, closeAddModal,
  }
}

export default connect(MapStateToProps)(Main)
