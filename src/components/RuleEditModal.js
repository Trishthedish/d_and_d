import React, {Component} from 'react';
import Modal from 'react-modal'
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
         <form>
           <SelectField
             floatingLabelText="This is the Engine list"
             floatingLabelText="Engine"
             floatingLabelFixed={true}
             hintText="can we have this prefilled out?"
             floatingLabelStyle={labelStyle}>
            <MenuItem value={1} primaryText="Google" />
            <MenuItem value={2} primaryText="Yaboo" />
            <MenuItem value={3} primaryText="Bing" />
           </SelectField>
           <div style={labelStyle}>
             locale Regex
           </div>



         </form>
        </Modal>
      </div>
     )}
     }
     export default RuleEditModal
