import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';

class RuleAddModal extends Component {
  render() {
    console.log("helllloooooooo from Add New modal", this.props, "<<");
    const {onAddRule, rule, onAddRuleSave, onAddRuleCancel} = this.props
        console.log("helllloooooooo from Add New modal", this.rule, "<<");
    return (
      <div className="RuleAddModal">
        <Modal
          isOpen={this.props.addModalVisibility}
          className="Modal"
          overlayClassName="Overlay"
          onAfterOpen={()=>{console.log("add Rule opened!")}}
          onRequestClose={()=>{console.log("Add rule closed")}}
          contentLabel="Add Rule Modal"
          shouldCloseOnOverlayClick={true}>
          <h1> ADD RULE MODEL</h1>
            <form onSubmit={this.props.onRuleSave}>
              <p>Engine</p>
               <textarea type='text'
                 onChange={(event) => onAddRule('engine', event.target.value)}
                 />
              <p>Local Regex</p>
               <textarea type='text'/>
              <p>Strategy</p>
               <textarea type="text"/>
              <p>Keyword Regex</p>
               <textarea type="text"/>
              <p>Max Tries</p>
               <textarea type="text"/>
              <p>Proxy Balancer</p>
                 <textarea type="text" />
              <p>Destination Scraper</p>
                 <textarea type="text"/>
              <p>Overwrite</p>
                 <textarea type="text"/>
              <p>Raw HTML Source</p>
                 <textarea type="text"/>

              <div>
                <RaisedButton
                  label="Save Here"
                  secondary={true}
                  onClick={onAddRuleSave}
                  value="Save"/>

              <RaisedButton
                  label="Cancel Close"
                  primary={true}
                  onClick={onAddRuleCancel}
                  value="Close"/>
              </div>
          </form>
        </Modal>
      </div>
    )
  }
}

export default RuleAddModal
