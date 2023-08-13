# @coderspirit/eslint-config

This package provides a very opinionated and strict ESLint configuration (plus
some Prettier config as well). It basically combines other plugins and rules.

## Installation
```bash
# NPM
npm install @coderspirit/eslint-config --save-dev

# Yarn
yarn add @coderspirit/eslint-config --dev

# PNPM
pnpm add --save-dev @coderspirit/eslint-config
```

## Usage

### ESLint

In your `.eslintrc.cjs` file, add `'@coderspirit'` to the `extends` section:

```javascript
module.exports = {
    extends: [
        '@coderspirit',
        // ...
    ],
    // ...
}
```

### Prettier

In your `.prettierrc.mjs` file:

```javascript
import config from '@coderspirit/eslint-config/prettier'

export default {
    ...config,
    // ... your custom details
}
```
