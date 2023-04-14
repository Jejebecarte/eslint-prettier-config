<h1 align="center">Jejebecarte's ESLint and Prettier Config</h1>

Comprehensive ESLint and Prettier configuration for Javascript and Typescript projects, including React support.

> **Note**
> These packages were designed to be used together, however you may install them separately. In this case, some ESLint rules may be disabled due to `eslint-config-prettier`, but can be overriden.

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

## Installation

Install the packages and their peer dependencies with your package manager of choice.

```bash
$ npm i -D @jejebecarte/eslint-config @jejebecarte/prettier-config eslint prettier
```

or

```bash
$ yarn add -D @jejebecarte/eslint-config @jejebecarte/prettier-config eslint prettier
```

## Usage

### ESLint

**// TODO**

### Prettier

Create a `.prettierrc.js` file in the root directory of your project and add the following content:

```js
module.exports = require('@jejebecarte/prettier-config');
```

Alternatively, you may use the smaller `tabWidth` version:

```js
module.exports = require('@jejebecarte/prettier-config/small-tab-width');
```

## License

This is an open-source project licensed under the [LGPL-3.0-or-later](https://github.com/Jejebecarte/eslint-prettier-config/blob/master/LICENSE.md) license.
