import * as actionTypes from '../constants/actionTypes';
import { makeAction } from '../utils/makeAction';

let nextTodoId = 0;
export const addTodo = text => (
  {
    type: actionTypes.ADD_TODO,
    id: nextTodoId++,
    text,
  }
);

export const toggleTodo = makeAction(actionTypes.TOGGLE_TODO, 'id');
export const setVisibilityFilter = makeAction(actionTypes.SET_VISIBILITY_FILTER, 'filter');
