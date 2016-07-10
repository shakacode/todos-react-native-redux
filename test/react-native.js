import React from 'react';

const ReactNative = React;

export const PropTypes = React.PropTypes;

ReactNative.StyleSheet = {
  create: (style) => style,
};

const createMockComponent = displayName => {
  const MockComponent = props => <div {...props}>{props.children}</div>;
  MockComponent.displayName = displayName;
  MockComponent.propTypes = {
    children: React.PropTypes.node,
  };
  return MockComponent;
};

ReactNative.ListView = createMockComponent('ListView');
ReactNative.Text = createMockComponent('Text');
ReactNative.TouchableOpacity = createMockComponent('TouchableOpacity');
ReactNative.View = createMockComponent('View');

export default ReactNative;
