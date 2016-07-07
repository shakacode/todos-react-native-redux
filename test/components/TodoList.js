import React, { PropTypes, Text, View } from 'react-native';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <View>
    {todos.map(todo => (
      <View>
        <Text>{todo.text}</Text>
      </View>
    ))}
    </View>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
