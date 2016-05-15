import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TodoList from './TodoList'

describe('TodoList', () => {
  it('should render two to-dos', () => {
    const todos = [
      { text: 'test' },
      { text: 'test' }
    ]
    const wrapper = shallow(<TodoList todos={todos}/>)
    const result = wrapper.findWhere(component => {
      return component.props().children === 'test'
    })
    expect(result.length).to.equal(2)
  })
})
