<h1 align="center">Jejebecarte's ESLint and Prettier Config</h1>
<p align="center">
    <a href="https://www.npmjs.com/package/@jejebecarte/eslint-config" target="_blank" rel="noreferrer">
        <img alt="Version" src="https://img.shields.io/npm/dm/@jejebecarte/eslint-config.svg?color=blue">
    </a>
    <a href="https://www.npmjs.com/package/@jejebecarte/eslint-config" target="_blank" rel="noreferrer">
        <img alt="Version" src="https://img.shields.io/npm/v/@jejebecarte/eslint-config.svg">
    </a>
    <a href="https://github.com/Jejebecarte/eslint-config/blob/master/LICENSE" target="_blank" rel="noreferrer">
        <img alt="License: LGPL-3.0-or-later" src="https://img.shields.io/npm/l/@jejebecarte/eslint-config?color=green" />
    </a>
</p>

Comprehensive ESLint and Prettier configuration for Javascript and Typescript projects, including React support.

> [!NOTE]
> These configurations were designed to be used together, however you may use them individually. In this case, some ESLint rules may be disabled due to `eslint-config-prettier`, but this behaviour can be overridden.

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

## Installation

Install the package and its peer dependencies with your package manager of choice.

```bash
$ npm i -D @jejebecarte/eslint-config eslint prettier
```

or

```bash
$ yarn add -D @jejebecarte/eslint-config eslint prettier
```

## Usage

### ESLint

Create a `.eslintrc.js` file in the root directory of your project and add the following content:

```js
module.exports = {
    extends: '@jejebecarte',
};
```

If you have other shared configurations in the `extends` key, put this last so `eslint-config-prettier` is able to override rules that conflict with Prettier.

You may also want to add script to your `package.json` in order to quickly fix lint errors in your code:

```json
"scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
}
```

### Prettier

Create a `.prettierrc.js` file in the root directory of your project and add the following content:

```js
module.exports = require('@jejebecarte/eslint-config/prettier');
```

Alternatively, you may use the smaller `tabWidth` version:

```js
module.exports = require('@jejebecarte/eslint-config/prettier-stw');
```

## License

This is an open-source project licensed under the [LGPL-3.0-or-later](https://github.com/Jejebecarte/eslint-config/blob/master/LICENSE) license.
