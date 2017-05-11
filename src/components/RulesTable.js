import React, {Component} from 'react';
import 'react-virtualized/styles.css'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
// import {updateModal} from '../actions/'

// allows rules to be sorted..
const SortableItem = SortableElement((args) => {
    const {value, onEditRule} = args
    return (
      <TableRow style={{ width: 100, margin: 'auto' }}>
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
        {value.dest_scraper}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.overwrite}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        {value.raw_html}
      </TableRowColumn>
      <TableRowColumn className="td_box">
        <FlatButton
          label="EDIT"
          onTouchTap={() => onEditRule(value.id)}
          />
        <FlatButton label="❌"
          />
      </TableRowColumn>
    </TableRow>
  )
}) // end of SortableItem

const SortableList = SortableContainer(
  ({rules, onEditRule}) => {
    //const {rules} = state

    return (
      <Table className="ruleTable">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
          <TableRow
            rowNumber={1}
            displayBorder={true}
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
            <TableHeaderColumn tooltip={"Scraper that will be used"}>
              dest_scraper
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"No idea what this is."}>
              overwrite
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"hardly ever used."}>
              raw_html
            </TableHeaderColumn>
            <TableHeaderColumn tooltip={"Edit you Must!"}>
              Edit
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody className="ruleTable"
          showRowHover={true}>
            {rules.map((value, index) => (
              <SortableItem
                key={`rule-${index}`}
                index={index}
                value={value}
                onEditRule={onEditRule}

                />
            ))}
        </TableBody>
    </Table>

    );
  }
) // end of SortableList

class SortableComponent extends Component {

  onSortEnd = ({oldIndex, newIndex}) => {
     this.setState({
       rules: arrayMove(this.props.rules, oldIndex, newIndex),
     });
   };
   render() {
    const currentEngineFilter = this.props.engine // comes from a reducer (MapStateToProps)
    // // this.props.rules comes from reducer (MapStateToProps)
    //
    const filteredRules = this.props.rules.filter(function (rule) {
      if (currentEngineFilter === 'all') {
        return true
      } else {
        return rule.engine === currentEngineFilter
      }
    })
  //   return <SortableList rules={filteredRules} onSortEnd={this.onSortEnd} />;
  // }
    return <SortableList
      rules={filteredRules}
      onSortEnd={this.onSortEnd}
      onEditRule={this.props.onEditRule}/>;
  }
} // end of SortableComponent


class RulesTable extends Component {
  render() {
    return (
      <div><SortableComponent
        engine={this.props.engine}
        rules={this.props.rules}
        onEditRule={this.props.onEditRule}/>

      </div>

    )
  }
}
export default RulesTable
