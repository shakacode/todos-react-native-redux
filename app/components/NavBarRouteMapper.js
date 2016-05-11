import React, { StyleSheet, Text } from 'react-native'

export const NavBarRouteMapper = {
  LeftButton: () => { return null },
  RightButton: () => { return null },
  Title: (route) => <Text style={styles.navBarTitle}>{route.title}</Text>
}

const styles = StyleSheet.create({
  navBarTitle: {
    color: 'rgb(255,255,255)',
    fontSize: 24
  }
})
