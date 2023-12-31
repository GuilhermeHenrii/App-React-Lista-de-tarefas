module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/no-unused-state': 'off',
    'react/state-in-constructor': 'off',
    'import/no-duplicates': 'off',
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'linebreak-style': 'off',
  },
};
