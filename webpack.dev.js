const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name].js",
    chunkFilename: "[id].css"
  },

  devServer: {
    publicPath: '/pogim/',
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), "./public"),
    watchContentBase: true,
    stats: "none",
    quiet: false,
    open: true
  },

  plugins: [
    new CleanWebpackPlugin(["public/**/*.js", "public/**/*.css", "content/webpack.json"]),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
