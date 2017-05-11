export const UPDATE_ENGINE = 'UPDATE_ENGINE'

export const UPDATE_EDIT_MODAL = 'UPDATE_EDIT_MODAL'
export const UPDATE_EDITING_RULE = 'UPDATE_EDITING_RULE'
export const SAVE_EDIT_RULE = 'SAVE_EDIT_RULE'
export const CLOSE_EDIT_MODAL = "CLOSE_EDIT_MODAL"

export const UPDATE_ADD_MODAL = "UPDATE_ADD_MODAL"
export const SAVE_ADD_RULE = "SAVE_ADD_RULE"
// export const UPDATE_ADDING_RULE = "UPDATE_ADDING_RULE"
// export const SAVE_ADD_RULE = "SAVE_ADD_RULE"
// export const CLOSE_ADD_MODAL = "CLOSE_ADD_MODAL"
// export const UPDATE_ADDING_MODAL = "UPDATE_ADDING_MODAL"

// General Page Concern
export function updateEngine(engine) {
  return {
    type: UPDATE_ENGINE,
    engine
  }
}
// Concerned with Modal for Editing
// ---------------------------------------
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
// ---------------------------------------
// Concerned with Modal for Adding new rule
// rule formally known as rule_add_modal
export function updateAddModal() {
  return {
    type: UPDATE_ADD_MODAL,
  }
}

export function saveAddRule() {
  return {
    type: SAVE_ADD_RULE,
  }
}



// export function updateAddingRule(field, value) {
//   return {
//     type: UPDATE_ADDING_RULE,
//     field, value
//   }
// }

// export function saveAddRule(rules) {
//   return {
//     type: SAVE_ADD_RULE,
//     rules
//   }
// }

// export function closeAddModal(editModalVisibility) {
//   return {
//     type: CLOSE_ADD_MODAL,
//   }
// }

// eventually you can get rid of this.
// updateEditingRule // why can't I use field and value over again!?
// export function updateAddingModal(editModalVisibility,ruleId) {
//   return {
//     type: UPDATE_ADDING_MODAL,
//     editModalVisibility, ruleId
//   }
// }
// ---------------------------------------
