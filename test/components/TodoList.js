import React from 'react-native'
const { Component, Text, View } = React

export default class TodoList extends Component {
  render() {
    const { todos } = this.props
    return(
      <View>
      {todos.map(todo => (
        <View>
          <Text>{todo.text}</Text>
        </View>
      ))}
      </View>
    )
  }
}
