const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  let options = this.options['analytics'] || moduleOptions

  options.type = options.type || 'pageview'
  options.aip = options.aip || 0

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'analytics.js',
    options,
    ssr: false
  })
}
