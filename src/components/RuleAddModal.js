import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';

class RuleAddModal extends Component {
  render() {

    console.log("helllloooooooo from modal", this.props, "");
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
        </Modal>
      </div>
    )
  }
}

export default RuleAddModal
