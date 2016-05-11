export const keyExists = (key, target) => {
  if (!target || (target.constructor !== Array && target.constructor !== Object)) {
    return false
  }
  for (let i = 0; i < target.length; i++) {
    if (target[i] === key) {
      return true
    }
  }
  return key in target
}
