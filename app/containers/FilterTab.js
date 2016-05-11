import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Tab from '../components/Tab'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: () => { dispatch(setVisibilityFilter(ownProps.filter)) }
  }
}

const FilterTab = connect(mapStateToProps, mapDispatchToProps)(Tab)

export default FilterTab
