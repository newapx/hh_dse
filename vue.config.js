const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.plugin('copy')
          .tap(args => {
            args[0].push({
              from: path.resolve(__dirname, 'README.md'),
              to: path.resolve(__dirname, 'dist/'),
              toType: 'dir',
              ignore: ['.DS_Store']
            })
            return args
          })
  }
}