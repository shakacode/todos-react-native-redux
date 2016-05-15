import { expect } from 'chai'
import * as actionTypes from '../../app/constants/actionTypes'
import todos from '../../app/reducers/todos'

describe('todos reducer', () => {
  it('should return initial empty array', () => {
    expect(todos(undefined, {})).to.eql([])
  })
  it('should return one to-do', () => {
    expect(
      todos([], { type: actionTypes.ADD_TODO, text: 'Run the tests', id: 0 })
    ).to.eql([
      { text: 'Run the tests', completed: false, id: 0 }
    ])
  })
  it('should return two to-dos', () => {
    expect(
      todos([ { text: 'Run the tests', completed: false, id: 0 }
      ], { type: actionTypes.ADD_TODO, text: 'Use Redux', id: 1 })
    ).to.eql([
      { text: 'Run the tests', completed: false, id: 0 },
      { text: 'Use Redux', completed: false, id: 1 }
    ])
  })
  it('should return three to-dos', () => {
    expect(
      todos([
        { text: 'Run the tests', completed: false, id: 0 },
        { text: 'Use Redux', completed: false, id: 1 }
      ], { type: actionTypes.ADD_TODO, text: 'Fix the tests', id: 2 })
    ).to.eql([
      { text: 'Run the tests', completed: false, id: 0 },
      { text: 'Use Redux', completed: false, id: 1 },
      { text: 'Fix the tests', completed: false, id: 2 }
    ])
  })
  it('should return toggled to-do', () => {
    expect(
      todos([
        { text: 'Run the tests', completed: false, id: 1 },
        { text: 'Use Redux', completed: false, id: 0 }
      ], { type: actionTypes.TOGGLE_TODO, id: 1 })
    ).to.eql([
      { text: 'Run the tests', completed: true, id: 1 },
      { text: 'Use Redux', completed: false, id: 0 }
    ])
  })
})
