
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import {red500, yellow500, blue500, greenA200} from 'material-ui/styles/colors';
// not clear if this import was actually doing anything.
// import 'react-virtualized/styles.css'

const buttonStyle = {
  margin: 8,
}
// careful, you've saved these filters as RaisedButtonss
class RaisedButtons extends Component {
  render() {
    const currentEngineFilter = this.props.engine
    const activeStyles = Object.assign(buttonStyle, {backgroundColor: 'yellow'})

    // this.props.engine is one of ['all', 'google', 'yahoo', 'bing']
    // debugger
    console.log("currentEngineFilter",currentEngineFilter)
    return (
      <div className="RaisedButton">

        <RaisedButton
            label="Google"
            secondary={true}
            style={currentEngineFilter === 'all' ? activeStyles : buttonStyle}
            />
        <RaisedButton label="Yahoo" primary={true} style={buttonStyle} />
        <RaisedButton label="Bing" disabled={false} style={buttonStyle} backgroundColor="#a4c639" />
        <RaisedButton label="All" style={buttonStyle} />
        <br />
      </div>
    )
  }
}

export default RaisedButtons
