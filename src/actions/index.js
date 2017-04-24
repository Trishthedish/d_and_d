// let nextRuleId = 0
let nextRuleId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const addRule = (text) => ({
  type: 'ADD_RULE',
  id: nextRuleId++,
  text
})

export const editRule = (id) => ({
  type: 'EDIT_RULE',
  id
})

export const deleteRule = (id) => ({
  type: 'DELETE_RULE',
  id
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
