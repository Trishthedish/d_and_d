import React, {Component} from 'react';
import Modal from 'react-modal'

class AddRuleModal extends Component {
  render() {

    console.log("helllloooooooo from modal", this.props );
    return (
      <div className="addRuleModal">
        <Modal
          isOpen={this.props.editModalVisibility}
          className="Modal"
          overlayClassName="Overlay"
          onAfterOpen={()=>{console.log("add Rule opened!")}}
          onRequestClose={()=>{console.log("Add rule closed")}}
          contentLabel="Add Rule Modal"
          shouldCloseOnOverlayClick={true}>>
        </Modal>
      </div>
    )
  }
}

export default AddRuleModal
