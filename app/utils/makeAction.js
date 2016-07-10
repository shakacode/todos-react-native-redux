export const makeAction = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, key) => {
    action[argNames[key]] = args[key];
  });
  return action;
};
