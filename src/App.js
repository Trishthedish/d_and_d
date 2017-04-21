import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500, greenA200} from 'material-ui/styles/colors';
import google_icon from '../src/google_icon.png';
import yahoo_icon from '../src/yahoo_icon.png';
import bing_icon from '../src/bing_icon.png';
import {emojify} from 'react-emojione';



const engineIcon = {
  width: '41px',
  height: '40px',
  padding: '4px',
}

const iconStyles = {
  fontSize: '48px',
  height: 40,
};

const buttonStyle = {
  margin: 12,
}


// example of creating buttons instead of using icons.
// Material UI Raised Button Example
//FILTERS
const RaisedButtonExampleSimple = () => (
  <div className ="RaisedButtonExampleSimple">
    <RaisedButton label="Google" secondary={true} style={buttonStyle} />
    <RaisedButton label="Yahoo" primary={true} style={buttonStyle} />
    <RaisedButton label="Bing" disabled={false} style={buttonStyle} backgroundColor="#a4c639" />
    <RaisedButton label="All" style={buttonStyle} />
    <br />
  </div>
);


// // list of engine icons that designed myself
// const HomemadeEngineIcons = () => (
//   <div className="HomemadeEngineIcons">
//     <h1>HomemadeEngineIcons</h1>
//     <img src={google_icon} style={engineIcon} color={'#3AB1C8'} hoverColor={greenA200}></img>
//     <img src={yahoo_icon} style={engineIcon}></img>
//     <img src={bing_icon} style={engineIcon}></img>
//
//   </div>
// );


// allows rules to be sorted..
const SortableItem = SortableElement(({value}) =>

    <TableRow>
      <TableRowColumn className="td_box">
        {value.engine}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.locale_regex}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.strategy}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.keyword_regex}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.max_tries}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.proxy_bal}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.division}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.dest_scraper}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.overwrite}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.raw_html}
      </TableRowColumn>
    </TableRow>
) // end of SortableItem

const SortableList = SortableContainer(
  (state) => {



    const {rules} = state

    return (

      <Table className="ruleTable">
        <TableHeader displaySelectAll = {false} adjustForCheckbox	= {false} >
          <TableRow
            showRowHover = {true}
            rowNumber	= {1}
            displayBorder = {true}
            >
            <TableHeaderColumn tooltip={"Search Engines: like google, bing, yahoo"}>
              Engine
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"Language - Country of origin"}>
              Locale Regex
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"What strategy to use"}>
              Strategy
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"Who uses this??"}>
              Keyword Regex
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"0 - 100"}>
              max_tries
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"What Proxy Balancer to use"}>
              proxy_bal
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"This will be a symbol."}>
              division
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"Scraper that will be used"}>
              dest_scraper
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"No idea what this is."}>
              overwrite
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"hardly ever used."}>
              raw_html
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody className="ruleTable"
          showRowHover = {true}

          >
            {rules.map((value, index) => (
              <SortableItem key={`rule-${index}`} index={index} value={value} />
            ))}
        </TableBody>
    </Table>

    );
  }
) // end of SortableList

class SortableComponent extends Component {
  state = {
    rules: [
      {engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2_intl", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "google", locale_regex: "ko-KR", strategy: "first_page", keyword_regex: "", max_tries: 100, proxy_bal: "google_ec2_au", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "yahoo", locale_regex: "ja-JP", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "yahoo", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "bing", locale_regex: "zh-HK", strategy: "", keyword_regex: "", max_tries: 100, proxy_bal: "bing_api", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "bing", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "bing_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""}
    ]
  };
  onSortEnd = ({oldIndex, newIndex}) => {
     this.setState({
       rules: arrayMove(this.state.rules, oldIndex, newIndex),
     });
   };
   render() {
    return <SortableList rules={this.state.rules} onSortEnd={this.onSortEnd} />;
  }
} // end of SortableComponent

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Swappable Remastered</h2>
        </div>
        <div>
      </div>

        <RaisedButtonExampleSimple/>
        <h1 className="App-intro"> The Rules Table</h1>

        <div><SortableComponent/></div>
      </div>

      </MuiThemeProvider>
    );
  }
}
// /Users/trishgriego/practice/d_and_d/src/index.js
//error  'SortableComponent' is not defined  react/jsx-no-undef
export default App;
