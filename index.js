const loaderUtils = require('loader-utils')

module.exports = function(source, sourceMap) {
  const options = loaderUtils.getOptions(this)
  const { replace } = options

  if (!replace) {
    return this.callback(null, source, sourceMap)
  }

  if (typeof replace !== 'object') {
    return this.callback(
      new Error('replace must be a object'),
      source,
      sourceMap
    )
  }


  let result
  Object.keys(replace).forEach(key => {
    result = source.replace(key, replace[key])
  })

  return this.callback(null, result, sourceMap)
} 