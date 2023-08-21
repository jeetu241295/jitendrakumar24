const { merge } = require('webpack-merge');
const common = require('./webpack/webpack.common');

module.exports = env => {
  const currentEnv = env.BUILD_ENV === 'dev' ? 'dev' : 'prod';
  /* eslint-disable global-require,import/no-dynamic-require */
  const envConfig = require(`./webpack/webpack.${currentEnv}.js`);
  return merge(common(env), envConfig(env));
};
