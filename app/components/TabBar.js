import React, { Component, StyleSheet, Text, View } from 'react-native'
import * as visibilityFilters from '../constants/visibilityFilters'
import FilterTab from '../containers/FilterTab'

export default class TabBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <FilterTab filter={visibilityFilters.SHOW_AKTIVE}>
            <View style={[ styles.tab, styles.activeTodosTab ]}>
              <Text style={styles.tabText}>Active</Text>
            </View>
          </FilterTab>
        </View>
        <View style={styles.tabContainer}>
          <FilterTab filter={visibilityFilters.SHOW_ALL}>
            <View style={[ styles.tab, styles.allTodosTab ]}>
              <Text style={styles.tabText}>All</Text>
            </View>
          </FilterTab>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  tabContainer: {
    backgroundColor: 'rgb(33,33,33)',
    flex: 1,
    flexDirection: 'column'
  },
  tab: {
    borderRadius: 15,
    height: 48,
    marginVertical: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontWeight: '500'
  },
  activeTodosTab: {
    backgroundColor: 'rgb(76,175,80)',
    marginLeft: 16
  },
  allTodosTab: {
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    marginHorizontal: 16
  }
})
