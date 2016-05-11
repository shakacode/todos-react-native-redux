import React, { Component, PropTypes, TouchableOpacity } from 'react-native'

export default class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired
  };
  render() {
    const { active, children, onPress } = this.props
    if (active) {
      {children}
    }
    return (
      <TouchableOpacity onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
}
