export const makeAction = (type, ...argNames) => {
  return (...args) => {
    let action = { type }
    argNames.forEach((arg, key) => {
      action[argNames[key]] = args[key]
    })
    return action
  }
}
