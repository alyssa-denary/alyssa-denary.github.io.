module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({ stage: 1 }), // Allows use of future CSS
    require("postcss-nested"),
    require("postcss-custom-media"),
    require("postcss-media-minmax"),
    require("autoprefixer"),
    require("cssnano"), // Minimizes CSS code to fewer lines/ removes line breaks
  ],
};
