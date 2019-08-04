const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withFonts({
    webpack(config, options) {
      return config;
    }
  })
);
