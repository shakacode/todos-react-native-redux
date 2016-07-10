import React from 'react-native';
const { Component, ListView, PropTypes, Text, TouchableOpacity, View } = React;
import { getDataSource } from '../utils/getDataSource';
import { sortTodos } from '../utils/sortTodos';
import styles from '../styles/todoList';

export default class TodoList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.renderRow = this.renderRow.bind(this);
    this.onPressRow = this.onPressRow.bind(this);
  }
  initialState() {
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[`${sectionID}-${rowID}`];
    return {
      dataSource: new ListView.DataSource({
        getSectionData,
        getRowData,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }
  componentDidMount() {
    this.getData(this.props.todos);
  }
  componentWillReceiveProps(nextProps) {
    this.getData(nextProps.todos);
  }
  getData(todos) {
    const sortedTodos = sortTodos(todos);
    const { dataBlob, sectionIDs, rowIDs } = getDataSource(sortedTodos);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
    });
  }
  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        enableEmptySections
        dataSource={this.state.dataSource}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    );
  }
  renderSectionHeader(sectionData: {}, sectionID: number) {
    return (
      <View key={`${sectionID}`} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionData.name}</Text>
      </View>
    );
  }
  renderRow(rowData: {}, sectionID: number, rowID: number) {
    return (
      <TouchableOpacity key={`${sectionID}-${rowID}`} onPress={() => this.onPressRow(rowData)}>
        <View style={styles.row}>
          <Text style={styles.rowText} numberOfLines={1}>{rowData.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  renderSeparator(sectionID: number, rowID: number) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    );
  }
  onPressRow(rowData: {}) {
    this.props.toggleTodo(rowData.id);
  }
}
