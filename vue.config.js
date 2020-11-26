const path = require('path');
const resolvePath = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
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
  }
}
