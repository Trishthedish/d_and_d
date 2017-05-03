import React, {Component} from 'react';
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton';


class RuleEditModal extends Component {
  render() {
  const labelStyle = {
    color: 'rgb(41, 128, 185)',
    // size: 40, no idea how to get size to change.
  }

    return (
      <div>
        <Modal
          isOpen={this.props.editModalVisibility}
          closeTimeoutMS={10}
          className="Modal"
          overlayClassName="Overlay"
          onAfterOpen={()=>{console.log("opened so easy!")}}
          onRequestClose={()=>{console.log("requestedClose")}}
          contentLabel="Edit Rule Modal"
          ariaHideApp={false}
          shouldCloseOnOverlayClick={false}>
          <h1>Modal Content</h1>
          <RaisedButton className="right-closing-button" label="close modal"  backgroundColor="red"/>
          <button>WHY DOES THIS WORK TO CLOSE TIHNGS??</button>
      <form>
           <p>Engine</p>
            <input/>
           <p>Local Regex</p>
            <input/>
           <p>Strategy</p>
            <input/>
           <p>Keyword Regex</p>
              <input/>
           <p>Subscription</p>
              <input/>
           <p>Max Tries</p>
              <input/>
           <p>Proxy Balancer</p>
              <input/>
           <p>Destination Scraper</p>
              <input/>
           <p>Overwrite</p>
              <input/>
           <p>Raw HTML Source</p>
              <input/>
         </form>
        </Modal>
      </div>
     )}
     }
     export default RuleEditModal
