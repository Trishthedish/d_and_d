import React, { Component } from 'react';
// import './App.css';
// import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
import {connect} from 'react-redux'


class Main extends Component {
   render() {
     return
     <div>
       <h1>Hello World</h1>
     </div>


   }
 }
function MapStateToProps(state) {
  return {}
}

export default connect(MapStateToProps)(Main)
