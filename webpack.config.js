const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry source code of your react project
  entry: path.join(__dirname, 'src/index.jsx'),
  // output, basic configuration to specify folder and name
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    // rules are here to handle files with loaders
    rules: [
      {
        // we have our jsx file here treated by babel
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              // preset is needed to tell babel that it's a react project and syntax
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  },
  // different plugins that can be added for minification, compression...
  plugins: [
    // here we use it to copy our html file into the dist folder so that we can use it in a browser
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    })
  ],
  // local server to watch changes in files and reload the page (hot reloading), it takes the dist folder in fact the index.html which calls the index.js when you go at the address localhost:3000
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
}