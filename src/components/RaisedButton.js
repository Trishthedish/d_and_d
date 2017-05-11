
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 8,
}

class RaisedButtons extends Component {
  render() {
    const currentEngineFilter = this.props.engine
    const activeStyles = Object.assign(buttonStyle, {backgroundColor: 'purple'})
    let clickHandler = this.props.filterHandler
    clickHandler = clickHandler || ( function () {
      console.log('You did not pass a click handler')
      // could also throw new Error 'you shall not pass'
    })

    return (
      <div className="RaisedButtons">
        <br/>
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
      </div>
    )
  }
}

export default RaisedButtons
