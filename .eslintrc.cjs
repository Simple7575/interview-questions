module.exports = {
  root: true,
  env: { browser: true, es2020: true, commonjs: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 120 }],
    'no-unused-vars': 'warn',
    'class-methods-use-this': 'off',
    'arrow-parens': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    'prefer-destructuring': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
