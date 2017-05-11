export const UPDATE_ENGINE = 'UPDATE_ENGINE'
export const UPDATE_EDIT_MODAL = 'UPDATE_EDIT_MODAL'
export const UPDATE_EDITING_RULE = 'UPDATE_EDITING_RULE'
export const SAVE_EDIT_RULE = 'SAVE_EDIT_RULE'
export const CLOSE_EDIT_MODAL = "CLOSE_EDIT_MODAL"
export const UPDATE_ADD_MODAL = "UPDATE_ADD_MODAL"
export const DELETE_RULE = "DELETE_RULE"
// General Page Concern
export function updateEngine(engine) {
  return {
    type: UPDATE_ENGINE,
    engine
  }
}
// Concerned with Modals + Editing + Adding Rules
// ---------------------------------------------------- //
export function updateEditModal(editModalVisibility, ruleId) {
  return {
    type: UPDATE_EDIT_MODAL,
    editModalVisibility, ruleId
  }
}

export function updateEditingRule(field, value) {
  return {
    type: UPDATE_EDITING_RULE,
    field, value
  }
}

export function saveEditRule() {
  return {
    type: SAVE_EDIT_RULE,
  }
}

export function closeEditModal(editModalVisibility) {
  return {
    type: CLOSE_EDIT_MODAL,
    editModalVisibility
  }
}
export function updateAddModal() {
  return {
    type: UPDATE_ADD_MODAL,
  }
}

export function deleteRule(ruleId) {
  return {
    type: DELETE_RULE,
    ruleId
  }
}
