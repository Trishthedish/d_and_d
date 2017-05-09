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
          <h1> ADD RULE MODEL</h1>
          <form>
            <p>Engine</p>
              <textarea/>
            <p>Strategy</p>
              <textarea/>
            <p>Keyword Regex</p>
              <textarea/>
            <p>Max Tries</p>
              <textarea/>
            <p>Proxy Balancer</p>
              <textarea/>
            <p>Destination Scraper</p>
              <textarea/>
            <p>Overwrite</p>
              <textarea/>
            <p>Raw HTML Source</p>
              <textarea/>
              <div>
                <RaisedButton
                  label="Save Here"
                  secondary={true}

                  value="Save"/>

              <RaisedButton
                  label="Cancel Close"
                  primary={true}

                  value="Close"/>
              </div>
          </form>
        </Modal>
      </div>
    )
  }
}

export default RuleAddModal
