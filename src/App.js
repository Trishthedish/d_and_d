import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500, greenA200} from 'material-ui/styles/colors';
import google_icon from '../src/google_icon.png';

// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
// const var blue = "#070F4E"
// const lighterBlue = "#2772DB"
// const  lightestBlue = #3AB1C8



const iconStyles = {
  fontSize: '48px',
  height: 40,
};

const FontIconExampleIcons = () => (
  <div>
    <FontIcon className="material-icons" style={iconStyles} color={blue500} hoverColor={greenA200}>home</FontIcon>
    <FontIcon className="material-icons" style={iconStyles}>flight_takeoff</FontIcon>
    <FontIcon className="material-icons" style={iconStyles}>videogame_asset</FontIcon>
  </div>
);

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
      {engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2", division: " > ", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2_intl", division: " > ", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "google", locale_regex: "ko-KR", strategy: "first_page", keyword_regex: "", max_tries: 100, proxy_bal: "google_ec2_au", division: " > ", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "yahoo", locale_regex: "ja-JP", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", division: " > ", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "yahoo", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", division: " > ", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "bing", locale_regex: "zh-HK", strategy: "", keyword_regex: "", max_tries: 100, proxy_bal: "bing_api", division: " > ", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
      {engine: "bing", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "bing_ec2", division: " > ", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""}
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
          <h2>Welcome to React</h2>
        </div>

        <section>
          <FontIconExampleIcons />
            <img src={google_icon}/>

        </section>

        <h1 className="App-intro">
          SWAPPABLE REMASTERED
        </h1>

        <div><SortableComponent/></div>
      </div>
      </MuiThemeProvider>
    );
  }
}
// /Users/trishgriego/practice/d_and_d/src/index.js
//error  'SortableComponent' is not defined  react/jsx-no-undef
export default App;
