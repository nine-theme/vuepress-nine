module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  rules: {
  },
  parserOptions: {
    "parser": "@babel/eslint-parser",
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  plugins: [
  ],
  env: {
    "browser": true,
    "amd": true,
    "node": true
  }
}
