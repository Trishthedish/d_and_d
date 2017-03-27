import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-virtualized/styles.css'
// Using an ES6 transpiler like Babel
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// const var blue = "#070F4E"
// const lighterBlue = "#2772DB"
// const  lightestBlue = #3AB1C8
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

const SortableList = SortableContainer(
  (state) => {

    const {rules} = state

    return (

      <p className="ruleTable">
        {rules.map((value, index) => (
          <SortableItem key={`rule-${index}`} index={index} value={value} />
        ))}
      </p>
    );
  }
) // end of SortableList

const SortableItem = SortableElement(({value}) =>
  <tr>
    <td className="td_box">
      {value.engine}
    </td>
    <td className="td_box">
      {value.locale_regex}
    </td>
    <td className="td_box">
      {value.strategy}
    </td>
    <td className="td_box">
      {value.keyword_regex}
    </td>
    <td className="td_box">
      {value.max_tries}
    </td>
    <td className="td_box">
      {value.proxy_bal}
    </td>
    <td className="td_box">
      {value.division}
    </td>
    <td className="td_box">
      {value.dest_scraper}
    </td>
    <td className="td_box">
      {value.overwrite}
    </td>
    <td className="td_box">
      {value.raw_html}
    </td>
  </tr>
) // end of SortableItem

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div><SortableComponent/></div>
      </div>
    );
  }
}
// /Users/trishgriego/practice/d_and_d/src/index.js
//error  'SortableComponent' is not defined  react/jsx-no-undef
export default App;
