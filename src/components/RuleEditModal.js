import React, {Component} from 'react';
import Modal from 'react-modal'

class RuleEditModal extends Component {
  render() {
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
          <button>Close Modal</button>
           <fieldset>
             <legend>Choose Preffered Search Engine</legend>
             <p>
               <input type="radio" name="engines" id="google" value="google"/>
               <label for="google">google</label>
             </p>
             <p>
               <input type="radio" name="engines" id="yahoo" value="yahoo"/>
               <label for="yahoo">yahoo</label>
             </p>
             <p>
               <input type="radio" name="engines" id="bing" value="bing"/>
               <label for="bing">bing</label>
             </p>
            </fieldset>

            <fieldset>
              <legend>Local Regex</legend>
              <p>
                <input value={this.props.engine} />
              </p>
            </fieldset>
            <fieldset>
              <legend>Strategy</legend>
              <p>
                <input />
              </p>
            </fieldset>

            <fieldset>
              <legend>Keyword Regex</legend>
              <p>
                <input />
              </p>
            </fieldset>
            <fieldset>
              <legend>Subscription</legend>
              <p>
                <input />
              </p>
            </fieldset>
            <fieldset>
              <legend>Max Tries</legend>
              <p>
                <input />
              </p>
            </fieldset>
            <fieldset>
              <legend>Proxy Balancer</legend>
              <p>
                <input />
              </p>
            </fieldset>
            <fieldset>
              <legend>Destination Scraper</legend>
              <p>
                <input />
              </p>
            </fieldset>
            <fieldset>
              <legend>Overwrite</legend>
              <p>
                <input />
              </p>
            </fieldset>
            <fieldset>
              <legend>Raw HTML </legend>
              <p>
                <input />
              </p>
            </fieldset>
         </form>
       </Modal>
     </div>
    )}
}
export default RuleEditModal
