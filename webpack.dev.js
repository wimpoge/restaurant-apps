const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
<<<<<<< HEAD
    open: true,
=======
>>>>>>> master
    port: 9000,
    compress: true
  }
})
