module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'indent': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-return-assign': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'standard/no-callback-literal': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
