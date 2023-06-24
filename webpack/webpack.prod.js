const path = require("path");

module.exports = {
  entry: {
    greetings: "./src/greetings/index.js",
    lodash: "./src/lodash/index.js",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name]/bundle.[contenthash:12].js",
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
