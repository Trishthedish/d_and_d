import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';


class RuleEditModal extends Component {
  render() {

    // Update this.props.rule check to be 'isEmpty' because Boolean({}) is true
    if (!(this.props.editModalVisibility && this.props.rule)) {
      // early return if we're not editing
      return null
    }
    const {onEditRule, rule, onEditRuleSave, onEditRuleCancel, onRuleSave} = this.props
    // const onFormSave = this.props.onRuleSave

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
          <h1>Editing Swappable Rule</h1>
            <form onSubmit={this.props.onRuleSave}>
               <p>Engine</p>
                <textarea type='text' value={rule.engine}
                  onChange={(event) => onEditRule('engine', event.target.value)}
                  />
               <p>Local Regex</p>
                <textarea type='text' value={rule.locale_regex}
                  onChange={(event) => onEditRule('locale_regex', event.target.value)}
                  />
               <p>Strategy</p>
                <textarea type="text" value={rule.strategy}
                  onChange={(event) => onEditRule('strategy', event.target.value)}
                  />
               <p>Keyword Regex</p>
                <textarea type="text" value={rule.keyword_regex}
                  onChange={(event) => onEditRule('keyword_regex', event.target.value)}
                  />
               <p>Max Tries</p>
                <textarea type="text" value={rule.max_tries}
                  onChange={(event) => onEditRule('max_tries', event.target.value)}
                  />
               <p>Proxy Balancer</p>
                  <textarea type="text" value={rule.proxy_bal}
                    onChange={(event) => onEditRule('proxy_bal', event.target.value)}
                    />
               <p>Destination Scraper</p>
                  <textarea type="text" value={rule.dest_scraper}
                    onChange={(event) => onEditRule('dest_scraper', event.target.value)}
                    />
               <p>Overwrite</p>
                  <textarea type="text" value={rule.overwrite}
                    onChange={(event) => onEditRule('overwrite', event.target.value)}
                    />
               <p>Raw HTML Source</p>
                  <textarea type="text" value={rule.raw_html}
                    onChange={(event) => onEditRule('raw_html', event.target.value)}
                    />
              <div>
                <RaisedButton
                  label="Save Here"
                  secondary={true}
                  onClick={onEditRuleSave}
                  value="Save"
                  />

              <RaisedButton
                  label="Cancel Close"
                  primary={true}
                  onClick={onEditRuleCancel}
                  value="Close"
                  />
              </div>
            </form>
        </Modal>
      </div>)
   }
}
export default RuleEditModal
