import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';

class RuleAddModal extends Component {
  render() {
    console.log('## MODAL DATA AND PROPS:', this.props)
    console.log("helllloooooooo from modal", this.props, "<<");
    const { onSave, rule, onSave, onClose} = this.props
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
                <textarea type='text' value={rule.engine}
                  onChange={(event) => onRuleEdit('engine', event.target.value)}
                  />
               <p>Local Regex</p>
                <textarea type='text' value={rule.locale_regex}
                  onChange={(event) => onRuleEdit('locale_regex', event.target.value)}
                  />
               <p>Strategy</p>
                <textarea type="text" value={rule.strategy}
                  onChange={(event) => onRuleEdit('strategy', event.target.value)}
                  />
               <p>Keyword Regex</p>
                <textarea type="text" value={rule.keyword_regex}
                  onChange={(event) => onRuleEdit('keyword_regex', event.target.value)}
                  />
               <p>Max Tries</p>
                <textarea type="text" value={rule.max_tries}
                  onChange={(event) => onRuleEdit('max_tries', event.target.value)}/>
               <p>Proxy Balancer</p>
                  <textarea type="text" value={rule.proxy_bal}
                    onChange={(event) => onRuleEdit('proxy_bal', event.target.value)}/>
               <p>Destination Scraper</p>
                  <textarea type="text" value={rule.dest_scraper}
                    onChange={(event) => onRuleEdit('dest_scraper', event.target.value)}/>
               <p>Overwrite</p>
                  <textarea type="text" value={rule.overwrite}
                    onChange={(event) => onRuleEdit('overwrite', event.target.value)}/>
               <p>Raw HTML Source</p>
                  <textarea type="text" value={rule.raw_html}
                    onChange={(event) => onRuleEdit('raw_html', event.target.value)}/>
              <div>
                <RaisedButton
                  label="Save Here"
                  secondary={true}
                  onClick={onSave}
                  value="Save"/>

              <RaisedButton
                  label="Cancel Close"
                  primary={true}
                  onClick={onClose}
                  value="Close"/>
              </div>
          </form>
        </Modal>
      </div>
    )
  }
}

export default RuleAddModal
