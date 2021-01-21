const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]'
                // localIdentName: '[local]___[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    hot: true,
    host: 'localhost', // need to remove after fix is done https://github.com/webpack/webpack-dev-server/issues/2943
    historyApiFallback: true,
    open: true,
    port: 3333
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
