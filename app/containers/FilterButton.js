import React, { Component, PropTypes, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import * as visibilityFilters from '../constants/visibilityFilters'

class FilterButton extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor() {
    super()
    this.state = {
      filter: visibilityFilters.SHOW_AKTIVE,
      text: 'Hide Completed'
    }
    this.onPress = this.onPress.bind(this)
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonText}>{this.state.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  onPress() {
    this.props.dispatch(setVisibilityFilter(this.state.filter))
    const filter = (this.state.filter === visibilityFilters.SHOW_ALL) ?
      visibilityFilters.SHOW_AKTIVE : visibilityFilters.SHOW_ALL
    const text = (this.state.filter === visibilityFilters.SHOW_ALL) ?
      'Hide Completed' : 'Show Completed'
    this.setState({ filter, text })
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: 'rgb(33,33,33)',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'rgb(33,150,243)',
    borderRadius: 5,
    marginBottom: 16,
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
    fontWeight: '500'
  }
})

FilterButton = connect()(FilterButton)

export default FilterButton
