const loaderUtils = require('loader-utils')

module.exports = function(source, sourceMap) {
  const options = loaderUtils.getOptions(this)
  const { replace } = options

  if (!replace) {
    return this.callback(null, source, sourceMap)
  }

  if (!Array.isArray(replace)) {
    return this.callback(
      new Error('replace must be a array'),
      source,
      sourceMap
    )
  }


  let result
  replace.forEach(item => {
    const { from, to } = item

    result = source.replace(from, to)
  })

  return this.callback(null, result, sourceMap)
} 