// https://cn.eslint.org/docs/user-guide/configuring
module.exports = {
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    NODE_ENV: 'readonly',
  },
  rules: {
    // 0 - OK, 1 - WARN, 2 - ERROR
  },
};
