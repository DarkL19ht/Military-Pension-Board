```js

.eslintrc.cjs
-----
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

```

```js

eslint rule
0 - off
1 - warning
2 - error

```

```js

Testing
1. Arrange,
2. Act
3. Expect

```

```js
command
--------
npx lint-staged
```