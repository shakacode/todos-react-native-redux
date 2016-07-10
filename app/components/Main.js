import React, { Component, Navigator, View } from 'react-native';
import Todos from '../components/Todos';
import { NavBarRouteMapper } from '../components/NavBarRouteMapper';
import styles from '../styles/main';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref="navigator"
          initialRoute={{ id: 'todos', title: 'To-dos', index: 0 }}
          renderScene={this.renderScene}
          navigationBar={this.renderNavBar()}
          configureScene={this.configureScene}
        />
      </View>
    );
  }
  renderScene(navigator) {
    return (<Todos navigator={navigator} />);
  }
  renderNavBar() {
    return (<Navigator.NavigationBar routeMapper={NavBarRouteMapper} style={styles.navBar} />);
  }
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }
}
