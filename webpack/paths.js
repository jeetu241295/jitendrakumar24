const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  globalPath: path.resolve(__dirname, '../', 'src/Global'),
  sharedPath: path.resolve(__dirname, '../', 'src/Components'),
  imagePath: path.resolve(__dirname, '../', 'src/Assets/images'),
  faviconPath: path.resolve(__dirname, '../', 'src/Assets/images/favicon.ico'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
};
