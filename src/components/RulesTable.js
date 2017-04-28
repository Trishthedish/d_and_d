import React, {Component} from 'react';
import 'react-virtualized/styles.css'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


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
    const currentEngineFilter = this.props.engine // comes from a reducer (MapStateToProps)
    // // this.props.rules comes from reducer (MapStateToProps)
    //
    const filteredRules = this.state.rules.filter(function (rule) {
      if (currentEngineFilter === 'all') {
        return true
      } else {
        return rule.engine === currentEngineFilter
      }
    })
  //   return <SortableList rules={filteredRules} onSortEnd={this.onSortEnd} />;
  // }
    return <SortableList rules={filteredRules} onSortEnd={this.onSortEnd} />;
  }
} // end of SortableComponent


class RulesTable extends Component {
  render() {

    return (
      <div><SortableComponent engine={this.props.engine}/></div>

    )
  }
}
export default RulesTable
