
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import {red500, yellow500, blue500, greenA200} from 'material-ui/styles/colors';
// not clear if this import was actually doing anything.
// import 'react-virtualized/styles.css'

const buttonStyle = {
  margin: 8,
}
// careful, you've saved these filters as RaisedButtons
class RaisedButtons extends Component {
  render() {
    const currentEngineFilter = this.props.engine
    const activeStyles = Object.assign(buttonStyle, {backgroundColor: 'purple'})
    let clickHandler = this.props.foobarHandler
    clickHandler = clickHandler || ( function () {
      console.log('You did not pass a click handler')
      // could also throw new Error 'you shall not pass'
    })

    // this.props.engine is one of ['all', 'google', 'yahoo', 'bing']
    // debugger
    console.log("(RaisedButton.js)currentEngineFilter = ", currentEngineFilter)
    return (
      <div className="RaisedButtons">

        <RaisedButton
            label="Google"
            secondary={true}
            style={currentEngineFilter === 'google' ? activeStyles : buttonStyle}
            onTouchTap={() => clickHandler('google') }
            />
        <RaisedButton
          label="Yahoo"
          primary={true}
          style={currentEngineFilter === "yahoo" ? activeStyles : buttonStyle}
          onTouchTap={() => clickHandler('yahoo') }
           />
        <RaisedButton
          label="Bing" disabled={false}
          style={currentEngineFilter === "bing" ? activeStyles : buttonStyle}
          backgroundColor="#a4c639"
          onTouchTap={() => clickHandler('bing') }
          />
        <RaisedButton
          label="All"
          style={currentEngineFilter === 'all' ? activeStyles : buttonStyle}
          onTouchTap={() => clickHandler('all') }
          />

        <br />
      </div>
    )
  }
}

export default RaisedButtons
