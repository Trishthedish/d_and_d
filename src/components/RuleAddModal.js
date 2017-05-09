import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';

class RuleAddModal extends Component {
  render() {
    console.log("helllloooooooo from Add New modal", this.props, "<<");
    const {rule, onSave, onClose} = this.props
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

              <div>
                <RaisedButton
                  label="Save Here"
                  secondary={true}
                  onClick={onSave}
                  value="Save"/>
                // on add Cancel


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
