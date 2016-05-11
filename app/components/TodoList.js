import React, { Component, ListView, PropTypes, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDataSource } from '../utils/getDataSource'

export default class TodoList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.onPressRow = this.onPressRow.bind(this)
  }
  render() {
    const { todos } = this.props
    const orderedTodos = this.getOrderedTodos(todos)
    const dataSource = getDataSource(orderedTodos)
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        enableEmptySections={true}
        dataSource={dataSource}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    )
  }
  renderSectionHeader(sectionData: {}, sectionID: number) {
    return (
      <View key={`${sectionID}`} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionData.name}</Text>
      </View>
    )
  }
  renderRow(rowData: {}, sectionID: number, rowID: number) {
    return (
      <TouchableOpacity key={`${sectionID}-${rowID}`} onPress={() => this.onPressRow(rowData)}>
        <View style={styles.row}>
          <Text style={styles.rowText} numberOfLines={1}>{rowData.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderSeparator(sectionID: number, rowID: number) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    )
  }
  onPressRow(rowData: {}) {
    this.props.toggleTodo(rowData.id)
  }
  // Here I am making an ordered JSON structure from the simple Todos array. I am doing this
  // because I want to keep the Reducers as close as possible to the original Redux todos
  // example for a React Native / Redux presentation.
  // You should create your data structure using the Reducers and avoid this function.
  getOrderedTodos(todos: []) {
    const numberOfTodos = todos.length
    let orderedTodos = []
    let activeTodos = []
    let completedTodos = []

    for (let i = 0; i < numberOfTodos; i++) {
      let todo = todos[i]
      if (todo.completed) {
        completedTodos = this.cumulateTodos(completedTodos, todo)
      } else {
        activeTodos = this.cumulateTodos(activeTodos, todo)
      }
    }
    orderedTodos = this.cumulateOrderedTodos(orderedTodos, 0, 'Active', activeTodos)
    orderedTodos = this.cumulateOrderedTodos(orderedTodos, 1, 'Completed', completedTodos)
    return orderedTodos
  }
  cumulateTodos(todos: [], todo: {}) {
    return (todos[todo.id]) ? this.editTodo(todos, todo) : this.addTodo(todos, todo)
  }
  addTodo(todos: [], todo: {}) {
    return [ ...todos, todo ]
  }
  editTodo(todos: [], todo: {}) {
    return Object.assign({}, todos, todos.reduce((result, t) => {
      if (t.id === todo.id) { result[t] = todo }
      return result
    }, {}))
  }
  cumulateOrderedTodos(orderedTodos: [], id: number, name: string, todos: []) {
    if (todos.length > 0) {
      return [ ...orderedTodos, { id, name, rows: todos } ]
    } else {
      return orderedTodos
    }
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: 'rgb(48,48,48)',
    height: 48,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionHeaderText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },
  row: {
    height: 48,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowText: {
    color: 'rgb(255,255,255)',
    fontSize: 16
  },
  separator: {
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    marginLeft: 16
  }
})
