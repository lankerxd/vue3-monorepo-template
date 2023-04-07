module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['vite.config.ts', 'postcss.config.js'],
  // "parser": "@typescript-eslint/parser",
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        // 单行最多只能有3个属性
        singleline: {
          max: 3,
        },
        // 多行的情况下每行只能有1个属性
        multiline: {
          max: 1,
        },
      },
    ],
    '@typescript-eslint/promise-function-async': 'off',
  },
}
