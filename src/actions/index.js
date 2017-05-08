export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ENGINE = 'UPDATE_ENGINE'
export const UPDATE_MODAL = 'UPDATE_MODAL'
export const UPDATE_EDITING_RULE = 'UPDATE_EDITING_RULE'
export const SAVE_RULE = 'SAVE_RULE'
export const CLOSE_MODAL = "CLOSE_MODAL"
export const ADD_RULE = "ADD_RULE"


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

// it seems like I might also need to pass field and value?
export function addRule() {
  return {
    type: ADD_RULE,
  }
}
