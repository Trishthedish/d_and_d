export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ENGINE = 'UPDATE_ENGINE'
export const UPDATE_MODAL = 'UPDATE_MODAL'
export function updateName (name) {
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

export function updateModal(editModalVisibility) {
  return {
    type: UPDATE_MODAL,
    editModalVisibility
  }
}
