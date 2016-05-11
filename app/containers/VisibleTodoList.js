import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import * as visibilityFilters from '../constants/visibilityFilters'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case visibilityFilters.SHOW_AKTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: (id) => { dispatch(toggleTodo(id)) }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
