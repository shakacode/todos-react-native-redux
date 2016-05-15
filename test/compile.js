const fs = require('fs')
const path = require('path')
const babel = require('babel-core')
const origJS = require.extensions['.js']

require.extensions['.js'] = function (module, filename) {
  let output
  if (filename.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
    filename = path.resolve('test/react-native.js')
  }
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJS || require.extensions['.js'])(module, filename)
  }
  const source = fs.readFileSync(filename, 'utf8')
  output = babel.transform(source, { filename }).code

  return module._compile(output, filename)
}
