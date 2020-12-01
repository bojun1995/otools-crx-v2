const path = require('path');
const resolvePath = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    // debugger不准确开启
    devtool: 'source-map'
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: './src/styles/index.scss'
      })
      .end()
    })
  },
}
