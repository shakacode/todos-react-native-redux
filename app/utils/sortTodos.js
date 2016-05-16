// Here I am making an sorted JSON structure from the Todos array. I am doing this
// because I want to keep the Reducers as close as possible to the original Redux todos
// example for a React Native / Redux presentation.
// You should create your own data structure in the Reducers and avoid this function.
const addTodo = (todos: [], todo: {}) => {
  return [ ...todos, todo ]
}

const editTodo = (todos: [], todo: {}) => {
  return Object.assign({}, todos, todos.reduce((result, t) => {
    if (t.id === todo.id) { result[t] = todo }
    return result
  }, {}))
}

const cumulateTodos = (todos: [], todo: {}) => {
  return (todos[todo.id]) ? editTodo(todos, todo) : addTodo(todos, todo)
}

const cumulateSortedTodos = (sortedTodos: [], id: number, name: string, todos: []) => {
  if (todos.length > 0) {
    return [ ...sortedTodos, { id, name, rows: todos } ]
  } else {
    return sortedTodos
  }
}

export const sortTodos = (todos: []) => {
  const numberOfTodos = todos.length
  let sortedTodos = []
  let activeTodos = []
  let completedTodos = []

  for (let i = 0; i < numberOfTodos; i++) {
    let todo = todos[i]
    if (todo.completed) {
      completedTodos = cumulateTodos(completedTodos, todo)
    } else {
      activeTodos = cumulateTodos(activeTodos, todo)
    }
  }
  sortedTodos = cumulateSortedTodos(sortedTodos, 0, 'Active', activeTodos)
  sortedTodos = cumulateSortedTodos(sortedTodos, 1, 'Completed', completedTodos)
  return sortedTodos
}
