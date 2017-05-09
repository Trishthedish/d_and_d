import {combineReducers} from 'redux';

import {
  UPDATE_NAME, UPDATE_ENGINE, UPDATE_MODAL,
  UPDATE_EDITING_RULE, SAVE_RULE, CLOSE_MODAL,
  RULE_ADD_MODAL, CLOSE_MODAL_RULE, SAVE_ADD_RULE,
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
  newlyAddedRule: {},
  addModalVisibility: false,
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
      return Object.assign({}, state, {
        editModalVisibility: action.editModalVisibility,
      })
//this one should be named better
    case RULE_ADD_MODAL:

    return Object.assign({}, state, {
      addModalVisibility: true,
    })

    case CLOSE_MODAL_RULE:
    return Object.assign({}, state, {
      addModalVisibility: false,
    })
    case SAVE_ADD_RULE:
    // case ADD_RULE:
    // // CREATE a new blank rule

    // // Find greatest RuleId that you already have + 1
    const ruleIds = state.rules.map((rule) => rule.id)
    ruleIds.sort();
    const newRuleId = ruleIds[ruleIds.length - 1] + 1;
    console.log("newRuleId >>", newRuleId)
    //// set new Rule id to above.
    //
    const newestRule = {
      id: newRuleId,
      engine: "",
      locale_regex: "",
      strategy: "",
      keyword_regex: "",
      max_tries: "",
      prox_bal: "",
      dest_scraper: "",
      overwrite: "",
      raw_html: "",
    }


    console.log("newestRule >>", newestRule)

    // shovel this newly minted rule
    // set editingRule to a copy of new rule.

    // return Object.assign({},state, {
    //   editModalVisibility: true,
    //   rules: newRules,
    //
    // })

    return Object.assign({}, state, {
      ...state,
      rules:[...state.rules, action.newestRule]
    })



    default:
      return state
  }
}
const appState = combineReducers({
  main
})

export default appState
