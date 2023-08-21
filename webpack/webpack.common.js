const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = () => {
  return {
    entry: commonPaths.entryPath,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/
        },
        {
          test: /\.(png|jpe?g|gif|svg|JPE?G|PNG|WebP|webp|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: commonPaths.imagesFolder
              }
            }
          ]
        },
        {
          test: /\.(woff2|ttf|woff|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: commonPaths.fontsFolder,
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: [
        '.*',
        '.js',
        '.jsx',
        '.css',
        '.webp',
        '.json',
        '.jpeg',
        '.jpg'
      ],
      alias: {
        __GLOBAL__: commonPaths.globalPath,
        __SHARED__: commonPaths.sharedPath,
        __ASSETS__: commonPaths.assetsPath
      }
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: commonPaths.templatePath,
        favicon: commonPaths.faviconPath
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        fix: true,
        emitWarning: false,
        failOnWarning: false
      })
    ]
  };
};
