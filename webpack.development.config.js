const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js', // main.js
        path: path.resolve(__dirname, 'dist')
    },
    mode : 'development',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
      template : "./src/index.html"
    })],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
};