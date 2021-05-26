module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: process.env.VUE_APP_API
  }
}
