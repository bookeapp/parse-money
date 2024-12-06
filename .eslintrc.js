module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'sort-imports-es6-autofix'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['*.js'],
  rules: {
    'max-len': ['error', 130, 2],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'padding-line-between-statements': [
      'warn',
      {
        'blankLine': 'always',
        'prev': 'const',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': 'let',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': 'var',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'const'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'let'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'var'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      }
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        'ignoreCase': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': [
          'none',
          'all',
          'multiple',
          'single'
        ]
      }
    ],
  }
};