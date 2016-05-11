export const makeReducer = (initialState: Object, handlers: Object) => {
  return function reducer(state: Object = initialState, action: {type: string}) {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state
  }
}
