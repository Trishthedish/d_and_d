export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ENGINE = 'UPDATE_ENGINE'

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
