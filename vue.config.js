module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        "win": {
          "target": "portable",
          "icon": "src/assets/logo.png"
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/sass/globals.sass"`
      }
    }
  }
}
