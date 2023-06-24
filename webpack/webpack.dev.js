const path = require("path");

module.exports = {
  entry: {
    greetings: "./src/greetings/index.js",
    lodash: "./src/lodash/index.js",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name]/bundle.js",
    clean: true,
  },
  mode: "development",
  optimization: {
    usedExports: true,
  },
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
