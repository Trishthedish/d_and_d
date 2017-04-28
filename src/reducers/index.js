import {combineReducers} from 'redux';

import {UPDATE_NAME, UPDATE_ENGINE} from '../actions'

export const ENGINES = {
  ALL: 'all',
  GOOGLE: 'google',
  YAHOO: 'yahoo',
  BING: 'bing'
}

const defaultRules = [
  {engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {engine: "google", locale_regex: "", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "google_ec2_intl", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {engine: "google", locale_regex: "ko-KR", strategy: "first_page", keyword_regex: "", max_tries: 100, proxy_bal: "google_ec2_au", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {engine: "yahoo", locale_regex: "ja-JP", strategy: "first_page", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {engine: "yahoo", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "yahoo_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {engine: "bing", locale_regex: "zh-HK", strategy: "", keyword_regex: "", max_tries: 100, proxy_bal: "bing_api", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""},
  {engine: "bing", locale_regex: "", strategy: "", keyword_regex: "", max_tries: 0, proxy_bal: "bing_ec2", division: "➡️", dest_scraper: "Scrapeable.homepage_first_page_search", overwrite: "", raw_html: ""}
]

function main(state={name: "", engine: 'all', rules: defaultRules}, action){

  switch(action.type) {
    case UPDATE_NAME:
    return Object.assign({}, state,{name: action.name})

    case UPDATE_ENGINE:
    // fill me in
      return Object.assign({}, state, {engine: action.engine})

    default:
    return state
  }
}
const appState = combineReducers({
  main
})

export default appState
