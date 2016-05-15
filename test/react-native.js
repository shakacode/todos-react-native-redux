import React from 'react'

const ReactNative = React

export const PropTypes = React.PropTypes

ReactNative.StyleSheet = {
  create: (style) => style
}

const createMockComponent = displayName => {
  return React.createClass({
    displayName,
    propTypes: {
      children: React.PropTypes.node
    },
    render() {
      return <div {...this.props}>{this.props.children}</div>
    }
  })
}

ReactNative.ListView = createMockComponent('ListView')
ReactNative.Text = createMockComponent('Text')
ReactNative.TouchableOpacity = createMockComponent('TouchableOpacity')
ReactNative.View = createMockComponent('View')

export default ReactNative
