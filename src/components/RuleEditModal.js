import React, {Component} from 'react';
import Modal from 'react-modal'
// import RaisedButton from 'material-ui/RaisedButton';
import {updateEditingRule} from '../actions'

class RuleEditModal extends Component {

  render() {
console.log()
    // Update this.props.rule check to be 'isEmpty' because Boolean({}) is true
    if (!(this.props.editModalVisibility && this.props.rule)) {
      // early return if we're not editing
      return null
    }
    const {onRuleEdit, rule} = this.props
    const onFormSave = this.props.onRuleSave
    console.log("RuleEditModal", rule);
    return (
      <div>
        <Modal
          isOpen={this.props.editModalVisibility}
          className="Modal"
          overlayClassName="Overlay"
          onAfterOpen={()=>{console.log("Yo totally clicked open!")}}
          onRequestClose={()=>{console.log("requestedClose")}}
          contentLabel="Edit Rule Modal"
          shouldCloseOnOverlayClick={true}>
          <h1>Modal Content</h1>
          <form onSubmit={onFormSave}>
             <p>Engine</p>
              <input type='text' value={rule.engine}
                onChange={(event) => onRuleEdit('engine', event.target.value)}
                />
             <p>Local Regex</p>
              <input type='text' value={rule.locale_regex}
                onChange={(event) => onRuleEdit('locale_regex', event.target.value)}
                />
             <p>Strategy</p>
              <input type="text" value={rule.strategy}
                onChange={(event) => onRuleEdit('strategy', event.target.value)}
                />
             <p>Keyword Regex</p>
              <input type="text" value={rule.keyword_regex}
                onChange={(event) => onRuleEdit('keyword_regex', event.target.value)}
                />
             <p>Max Tries</p>
              <input type="text" value={rule.max_tries}
                onChange={(event) => onRuleEdit('max_tries', event.target.value)}/>
             <p>Proxy Balancer</p>
                <input type="text" value={rule.proxy_bal}
                  onChange={(event) => onRuleEdit('proxy_bal', event.target.value)}/>
             <p>Destination Scraper</p>
                <input type="text" value={rule.dest_scraper}
                  onChange={(event) => onRuleEdit('dest_scraper', event.target.value)}/>
             <p>Overwrite</p>
                <input type="text" value={rule.overwrite}
                  onChange={(event) => onRuleEdit('overwrite', event.target.value)}/>
             <p>Raw HTML Source</p>
                <input type="text" value={rule.raw_html}
                  onChange={(event) => onRuleEdit('raw_html', event.target.value)}/>
            <p>
              <button onClick={onFormSave} value="Save" >SAVE</button>
            </p>
          </form>
        </Modal>
      </div>
     )}
     }
     export default RuleEditModal
