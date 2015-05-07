var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.jsx',

  output: {
    filename: 'bundle.js',
    path: './dist',
    hash: true
  },

  module: {
    loaders: [
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/assets/index_tmpl.html'
    })
  ],

  devServer: {
    contentBase: "./dist",
    colors: true,
    info: true,
    hot: true,
    inline: true
  }
};
