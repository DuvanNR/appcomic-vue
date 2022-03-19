const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/appcomic_vue/' : '/',
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: 'https://xkcd.com',
        pathRewrite: { '^/api': '' },
        "changeOrigin": true,
        "secure": false
      }
    }
  },
  chainWebpack: config => {
      config.module
          .rule('vue')
          .use('vue-loader')
          .tap(options => ({
          ...options,
          compilerOptions: { }
          }))
  }
})
