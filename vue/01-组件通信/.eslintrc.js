module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:mvvm/essential',
    '@mvvm/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'indent': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-return-assign': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
