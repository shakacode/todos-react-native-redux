// @flow
import * as actionTypes from '../constants/actionTypes'
import { makeReducer } from '../utils/makeReducer'

const todoHandlers = {
  [actionTypes.ADD_TODO](state: Object, action: { id: number, text: string }) {
    return { id: action.id, text: action.text, completed: false }
  },
  [actionTypes.TOGGLE_TODO](state: Object, action: { id: number }) {
    if (state.id !== action.id) { return state }
    return Object.assign({}, state, { completed: !state.completed })
  }
}

const todo = makeReducer({}, todoHandlers)

const todosHandlers = {
  [actionTypes.ADD_TODO](state: [], action: { id: number, text: string }) {
    return [ ...state, todo(undefined, action) ]
  },
  [actionTypes.TOGGLE_TODO](state: [], action: { id: number }) {
    return state.map(t => todo(t, action))
  }
}

const todos = makeReducer([], todosHandlers)

export default todos
