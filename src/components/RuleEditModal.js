import React, {Component} from 'react';
import Modal from 'react-modal'

class RuleEditModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.editModalVisibility}
        style={{zIndex:99}}
        onAfterOpen={()=>{console.log("opened so easy!")}}
        onRequestClose={()=>{console.log("requestedClose")}}
        contentLabel="Modal">
        <h1>Modal Content</h1>
        <p>Etc.</p>>
      </Modal>
    )}
}

export default RuleEditModal
