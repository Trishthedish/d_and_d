export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ENGINE = 'UPDATE_ENGINE'
export const UPDATE_MODAL = 'UPDATE_MODAL'
export const UPDATE_EDITING_RULE = 'UPDATE_EDITING_RULE'
export const SAVE_RULE = 'SAVE_RULE'
export const CLOSE_MODAL = "CLOSE_MODAL"
export const RULE_ADD_MODAL = "RULE_ADD_MODAL"
export const CLOSE_MODAL_RULE = "CLOSE_MODAL_RULE"
export const SAVE_ADD_RULE = "SAVE_ADD_RULE"


export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name
  }
}

export function updateEngine(engine) {
  return {
    type: UPDATE_ENGINE,
    engine
  }
}

export function updateModal(editModalVisibility, ruleId) {
  return {
    type: UPDATE_MODAL,
    editModalVisibility, ruleId
  }
}

export function updateEditingRule(field, value) {
  return {
    type: UPDATE_EDITING_RULE,
    field, value
  }
}

export function saveRule() {
  return {
    type: SAVE_RULE,
  }
}

export function closeModal(editModalVisibility) {
  return {
    type: CLOSE_MODAL,
    editModalVisibility
  }
}


export function ruleAddModal() {
  return {
    type: RULE_ADD_MODAL,
  }
}
// seems like I could use previous made action (closemodal)
// Though b/c asyn desgin perhaps better to separate?
export function closeModalRule(editModalVisibility) {
  return {
    type: CLOSE_MODAL_RULE,
  }
}

export function saveAddRule(rules) {
  return {
    type: SAVE_ADD_RULE,
    rules
  }
}
