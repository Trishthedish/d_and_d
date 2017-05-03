import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';
import {updateEditingRule} from '../actions'

class RuleEditModal extends Component {

  render() {
  const labelStyle = {
    color: 'rgb(41, 128, 185)',
    // size: 40, no idea how to get size to change.
  }

    // Update this.props.rule check to be 'isEmpty' because Boolean({}) is true
    if (!(this.props.editModalVisibility && this.props.rule)) {
      // early return if we're not editing
      return null
    }
    const {onRuleEdit, rule} = this.props
    const onFormSave = this.props.onRuleSave

    return (
      <div>
        <Modal
          isOpen={this.props.editModalVisibility}

          closeTimeoutMS={10}
          className="Modal"
          overlayClassName="Overlay"
          onAfterOpen={()=>{console.log("opened so easy!")}}
          onRequestClose={()=>{console.log("requestedClose")}}
          contentLabel="Edit Rule Modal"
          shouldCloseOnOverlayClick={true}>
          <h1>Modal Content</h1>
          <RaisedButton className="right-closing-button" label="close modal"  backgroundColor="red"/>
      <form onSubmit={onFormSave}>
           <p>Engine</p>
            <input type='text' value={rule.engine}
              onChange={(evt) => onRuleEdit('engine', evt.target.value)}
              />
           <p>Local Regex</p>
            <input/>
           <p>Strategy</p>
            <input/>
           <p>Keyword Regex</p>
              <input/>
           <p>Subscription</p>
              <input/>
           <p>Max Tries</p>
              <input/>
           <p>Proxy Balancer</p>
              <input/>
           <p>Destination Scraper</p>
              <input/>
           <p>Overwrite</p>
              <input/>
           <p>Raw HTML Source</p>
              <input/>
          <p>
            <button onClick={onFormSave} value="Save" />
          </p>
         </form>
        </Modal>
      </div>
     )}
     }
     export default RuleEditModal
