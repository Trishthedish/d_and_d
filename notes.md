// example of creating buttons instead of using icons.
const RaisedButtonExampleSimple = () => (
  <div className ="RaisedButtonExampleSimple">
    <h1>Material UI Raised Button Example</h1>
    <p className="RaisedButtonTitle">Filters</p>
    <RaisedButton label="Google" secondary={true} style={buttonStyle} />
    <RaisedButton label="Yahoo" primary={true} style={buttonStyle} />
    <RaisedButton label="Bing" disabled={false} style={buttonStyle} backgroundColor="#a4c639" />
    <RaisedButton label="All" style={buttonStyle} />
    <br />
  </div>
);

const FontIconExampleIcons = () => (
  <div>
    <h1>Material-UI Icon Examples</h1>
    <FontIcon className="material-icons" style={iconStyles} color={blue500} hoverColor={yellow500}>home</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} hoverColor={red500}>flight_takeoff</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} hoverColor={'#2772DB'}>videogame_asset</FontIcon>
  </div>
);


  <RaisedButton label="Google" secondary={true} style={buttonStyle} onClick={-> this.props.dispatch(updateFilter('google'))}/>
