
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const RaisedButton = () => (
  <div className ="RaisedButton">
    <RaisedButton label="Google" secondary={true} style={buttonStyle} />
    <RaisedButton label="Yahoo" primary={true} style={buttonStyle} />
    <RaisedButton label="Bing" disabled={false} style={buttonStyle} backgroundColor="#a4c639" />
    <RaisedButton label="All" style={buttonStyle} />
    <br />
  </div>
);

export default RaisedButton
