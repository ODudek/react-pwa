const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWepackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve("dist"),
    filename: "js/[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  mode: "development",
  plugins: [HtmlWebpackPluginConfig]
};
