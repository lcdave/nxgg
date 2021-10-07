module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "NxGG";
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        prependData: `@import "~@/sass/base/_variables.scss"; @import "~@/sass/tools/_functions.scss";`,
      },
    },
  },
};
