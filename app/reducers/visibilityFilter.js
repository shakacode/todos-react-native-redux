// @flow
import * as actionTypes from '../constants/actionTypes'
import * as visibilityFilters from '../constants/visibilityFilters'
import { makeReducer } from '../utils/makeReducer'

const visibilityFilterHandler = {
  [actionTypes.SET_VISIBILITY_FILTER](state: string, action: { filter: string }) {
    return action.filter
  }
}

const visibilityFilter = makeReducer(visibilityFilters.SHOW_ALL, visibilityFilterHandler)

export default visibilityFilter
