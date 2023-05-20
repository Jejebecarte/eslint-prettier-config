module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:import/recommended', 'airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-underscore-dangle': 'off',
    },
    overrides: [
        /**
         * Typescript
         */
        {
            files: '**/*.{ts,tsx}',
            extends: 'airbnb-typescript',
            parserOptions: {
                project: 'tsconfig.json',
            },
            rules: {
                '@typescript-eslint/comma-dangle': 'off',
                '@typescript-eslint/indent': 'off',
            },
        },
        /**
         * React
         */
        {
            files: '**/*.{jsx,tsx}',
            extends: ['plugin:react/recommended', 'airbnb/hooks'],
            parser: '@typescript-eslint/parser',
            rules: {
                'class-methods-use-this': 'off',
            },
        },
        /**
         * Testing library
         */
        {
            files: '**/?(*.)+(spec|test).[jt]s?(x)',
            extends: ['plugin:testing-library/react'],
            parser: '@typescript-eslint/parser',
        },
    ],
};
