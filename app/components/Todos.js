import React, { Component, DeviceEventEmitter, Dimensions, PropTypes, View } from 'react-native';
import AddTodo from '../containers/AddTodo';
import FilterButton from '../containers/FilterButton';
import VisibleTodoList from '../containers/VisibleTodoList';
import paddingTop from '../constants/paddingTop';
import styles from '../styles/todo';

export default class Todos extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { visibleHeight: Dimensions.get('window').height };
  }
  componentWillMount() {
    DeviceEventEmitter.addListener('keyboardWillShow', (ev) => {
      this.change({ visibleHeight: Dimensions.get('window').height - ev.endCoordinates.height });
    });
    DeviceEventEmitter.addListener('keyboardWillHide', () => {
      this.change({ visibleHeight: Dimensions.get('window').height });
    });
  }
  render() {
    const { navigator } = this.props;
    const height = this.state.visibleHeight;
    return (
      <View style={[styles.container, { paddingTop }, { height }]}>
        <FilterButton />
        <VisibleTodoList navigator={navigator} />
        <AddTodo />
      </View>
    );
  }
  change(state: {}) {
    this.setState(state);
  }
}
