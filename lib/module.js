const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  let options = this.options['analytics'] || moduleOptions

  options.type = options.type || 'pageview'

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'analytics.js',
    options,
    ssr: false
  })
}
