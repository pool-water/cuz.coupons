const path = require("path")
const webpack = require("webpack")
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../docs/"),
    filename: "cuz-zine-2023-jan.bundled.js",
    libraryTarget: "var",
    library: "x_x",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(vert|frag)$/,
        type: "asset/source",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
    ],
  },
  mode: "development",
  plugins: [
    new NodePolyfillPlugin({
      excludeAliases: ["console"]
    }),
  ],
  devServer: {
    bonjour: true,
    proxy: {
      "/holding": {
        target: "ws://localhost:8081",
        ws: true,
      },
      "/touch": "http://localhost:8081",
      "/whoami": "http://localhost:8081",
    }
  },
}
