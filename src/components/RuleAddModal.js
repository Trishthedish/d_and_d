//RuleAddModal.js
import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class RuleAddModal extends Component {
  handleChange = (event, index, value) => this.setState({value});
  render() {
    console.log("RuleAddModal.js / 'this.props' :", this.props, " <<");
    const {onAddRule, rule, onAddRuleSave, onAddRuleCancel} = this.props
        console.log("RuleAddModal.js/ 'this.state' :", this.state, " <<");
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
              {/*TODO: figure out why, value is null.*/}
              <SelectField
                floatingLabelText="Your Engine Choices"
                onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Google"/>
                <MenuItem value={2} primaryText="Yahoo"/>
                <MenuItem value={3} primaryText="Bing"/>
                <MenuItem value={4} primaryText="Google-Mobile"/>
                <MenuItem value={5} primaryText="None"/>
              </SelectField>
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
              <div className="modal-btn-grp">
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
