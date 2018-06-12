/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off'
  },
  env: {
    browser: true,
    node: true
  }
};
