module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', 'fb'],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'linebreak-style': [
      'error',
      require('os').EOL === '\r\n' ? 'windows' : 'unix',
    ],
  },
};
