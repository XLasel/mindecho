module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', '@typescript-eslint', 'simple-import-sort', 'prettier'],

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    "simple-import-sort/exports": "error",
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External packages:
          ['^react', '^@?\\w'],
          // Alias imports:
          ['^@(([\\/.]?\\w)|assets|test-utils)'],
          // Side effect imports:
          ['^\\u0000'],
          // Parent imports:
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports:
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports:
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
}
