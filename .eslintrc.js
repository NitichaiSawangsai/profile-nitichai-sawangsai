module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['@nuxtjs', 'plugin:wdio/recommended', 'plugin:nuxt/recommended'],
  rules: {},
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['wdio']
}
