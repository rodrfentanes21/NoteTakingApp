module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', '@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        'prettier/prettier': 0,
        'react/jsx-wrap-multilines': ['error', { prop: false }],
        'no-undef': 0,
        'import/no-duplicates': ['error', { considerQueryString: true }],
        '@types/react-native-sqlite-storage': 0,
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowHigherOrderFunctions: false,
          },
        ],
        'import/extensions': 1,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 1,
        'react/destructuring-assignment': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
        'react/no-array-index-key': 2,
        'react/prefer-stateless-function': 1,
        'react/prop-types': 2,
        'react/require-default-props': 1,
        complexity: ['error', 8],
        'max-lines': ['error', 200],
        'max-depth': ['error', 3],
        'max-params': ['error', 4],
      },
    },
  ],
};
