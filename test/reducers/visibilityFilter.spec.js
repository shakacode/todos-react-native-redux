import { expect } from 'chai'
import * as actionTypes from '../../app/constants/actionTypes'
import * as visibilityFilters from '../../app/constants/visibilityFilters'
import visibilityFilter from '../../app/reducers/visibilityFilter'

describe('visibilityFilter reducer', () => {
  it('should return initial visibility filter SHOW_ALL', () => {
    expect(visibilityFilter(undefined, {})).to.eql(visibilityFilters.SHOW_ALL)
  })
  it('should return new visibility filter SHOW_COMPLETED', () => {
    expect(
      visibilityFilter(undefined,
        { type: actionTypes.SET_VISIBILITY_FILTER, filter: visibilityFilters.SHOW_COMPLETED }
      )
    ).to.eql(visibilityFilters.SHOW_COMPLETED)
  })
})
