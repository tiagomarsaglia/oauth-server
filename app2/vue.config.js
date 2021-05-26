module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8081,
    proxy: process.env.VUE_APP_API
  }
}
