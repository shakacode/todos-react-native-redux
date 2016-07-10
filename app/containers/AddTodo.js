import React, { Component, PropTypes, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import styles from '../styles/addTodo';

class AddTodoClass extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            enablesReturnKeyAutomatically
            keyboardAppearance="dark"
            maxLength={255}
            placeholder="I want to do..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="done"
            onChangeText={text => this.change({ text })}
            onSubmitEditing={() => this.onSubmit()}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
  onSubmit() {
    this.props.dispatch(addTodo(this.state.text));
    this.change({ text: '' });
  }
  change(state) {
    this.setState(state);
  }
}

const AddTodo = connect()(AddTodoClass);

export default AddTodo;
