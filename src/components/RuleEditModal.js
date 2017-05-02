import React, {Component} from 'react';
import Modal from 'react-modal'

class RuleEditModal extends Component {



  render() {
    return (
      <Modal
        className="Modal"
        isOpen={this.props.editModalVisibility}
        onAfterOpen={()=>{console.log("opened so easy!")}}
        onRequestClose={()=>{console.log("requestedClose")}}

        contentLabel="Edit Rule Modal">
        <h1>Modal Content</h1>
        <p>Etc.</p>>
          <h2>THIS IS SOMETHING </h2>
      </Modal>
    )}
}

export default RuleEditModal
// style={{zIndex:1}}
