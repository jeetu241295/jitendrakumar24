const webpack = require('webpack');
const commonPaths = require('./paths');

module.exports = () => {
  return {
    mode: 'development',
    output: {
      filename: '[name].js',
      path: commonPaths.outputPath,
      clean: true,
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
                modules: {
                  localIdentName: '[local]'
                }
              }
            }
          ]
        }
      ]
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 2412
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
};
