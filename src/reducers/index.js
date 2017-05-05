import {combineReducers} from 'redux';

import {
  UPDATE_NAME, UPDATE_ENGINE, UPDATE_MODAL,
  UPDATE_EDITING_RULE, SAVE_RULE, CLOSE_MODAL,
  DELETE_RULE
} from '../actions'

export const ENGINES = {
  ALL: 'all',
  GOOGLE: 'google',
  YAHOO: 'yahoo',
  BING: 'bing'
}

const defaultRules = [
  {id: 1, engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {id: 2, engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2_intl", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {id: 3, engine: "google", locale_regex: "ko-KR", strategy: "first_page", keyword_regex: "", max_tries: 100, proxy_bal: "google_ec2_au", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {id: 4, engine: "yahoo", locale_regex: "ja-JP", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {id: 5, engine: "yahoo", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {id: 6, engine: "bing", locale_regex: "zh-HK", strategy: "", keyword_regex: "", max_tries: 100, proxy_bal: "bing_api", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {id: 7, engine: "bing", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "bing_ec2", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""}
]

function main(state={
  name: "",
  engine: 'all',
  rules: defaultRules,
  editModalVisibility: false,
  editingRuleId: null,
  editingRule: {},
  }, action){

  switch(action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, {name: action.name})

    case UPDATE_ENGINE:
      return Object.assign({}, state, {engine: action.engine})

    case UPDATE_MODAL:
      const ruleId=action.ruleId
      const editingRule = state.rules.filter(({id} = {}) => id === ruleId)[0]

      return Object.assign({}, state, {
          editModalVisibility: action.editModalVisibility,
          editingRuleId: ruleId,
          editingRule})

    case UPDATE_EDITING_RULE:
      const {field, value} = action
      let changes = {}
      changes[field] = value

      const newRule = Object.assign({},
        state.editingRule,
        changes
      )

      return Object.assign({}, state, {editingRule: newRule})
    case SAVE_RULE:
    // all rulevalues,
      console.log("rules", state.rules);
      const newRules =  [
        ...state.rules.slice(0, state.editingRule.id - 1),
        state.editingRule,
        ...state.rules.slice(state.editingRule.id)
      ];
      return Object.assign({},
        state, {
          editModalVisibility: false,
          rules: newRules}
      )

    case CLOSE_MODAL:
    // const ruleId = action.ruleId
      return Object.assign({}, state, {
        editModalVisibility: false,
      })

    case DELETE_RULE:
      // let index = rules.findIndex((ruleId) => rule.ruleId ===  n);
      // const ruleId = action.ruleId
      debugger
      const rulesWithoutDeleted = state.rules.filter(({id}) => {
        return id !== action.ruleId
      })

      // const deletingRule = state.rules.filter(({id} = {}) => id == ruleId)[0]
      // const newListOfRules = [
      //   ...state.rules.slice(0, state.deletingRule.id),
      //   ...state.rules.slice(state.deletingRule.id + 1)
      // ]
      //     console.log("deletingRule", deletingRule);
        return Object.assign({},
          state, {
            rules: rulesWithoutDeleted
          }
        )

    default:
      return state
  }
}
const appState = combineReducers({
  main
})

export default appState
