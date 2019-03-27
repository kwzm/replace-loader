const loaderUtils = require('loader-utils')
const validateOptions = require('schema-utils')

const loaderName = '@kwzm/replace-loader'
const schema = {
  type: 'array',
  properties: {
    replace: {
      type: 'object'
    }
  }
}

module.exports = function(source, sourceMap) {
  const options = loaderUtils.getOptions(this) || {}

  validateOptions(schema, options, loaderName)

  const { replace } = options

  let result
  replace.forEach(item => {
    const { from, to } = item

    result = source.replace(from, to)
  })

  return this.callback(null, result, sourceMap)
} 