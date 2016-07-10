import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import * as visibilityFilters from '../constants/visibilityFilters';
import styles from '../styles/filterButton';

class FilterButtonClass extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = {
      filter: visibilityFilters.SHOW_AKTIVE,
      text: 'Hide Completed',
    };
    this.onPress = this.onPress.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonText}>{this.state.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  onPress() {
    this.props.dispatch(setVisibilityFilter(this.state.filter));
    const filter = (this.state.filter === visibilityFilters.SHOW_ALL) ?
      visibilityFilters.SHOW_AKTIVE : visibilityFilters.SHOW_ALL;
    const text = (this.state.filter === visibilityFilters.SHOW_ALL) ?
      'Hide Completed' : 'Show Completed';
    this.setState({ filter, text });
  }
}

const FilterButton = connect()(FilterButtonClass);

export default FilterButton;
