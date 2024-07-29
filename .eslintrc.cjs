module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs', "vite.config.ts", "tailwind.config.js",
    "postcss.config.js"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: './tsconfig.json',
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: ['react-refresh', 'import', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        directory: "./tsconfig.json"
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'react': {
      version: 'detect'
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx', '.ts'] }],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     'js': 'never',
    //     'jsx': 'never',
    //     'ts': 'never',
    //     'tsx': 'never'
    //   }
    // ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: "es5"
      },
    ],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'simple-import-sort/exports': 'error',
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
};