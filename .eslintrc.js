module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['jest'],
  rules: {
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'object-curly-newline': ['error', { multiline: true }],
    'react/no-danger': ['off'],
    'no-nested-ternary': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-lonely-if': ['off'],
  },
};
