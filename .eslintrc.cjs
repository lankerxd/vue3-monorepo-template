module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: ['./tsconfig.json'],
    // extraFileExtensions: ['vue'],
  },
  ignorePatterns: ['vite.config.ts', 'postcss.config.js'],
  // "parser": "@typescript-eslint/parser",
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/promise-function-async': 'off',
  },
}
