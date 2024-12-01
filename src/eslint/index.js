module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    ignorePatterns: 'dist/',
    extends: ['eslint:recommended', 'plugin:import/recommended', 'airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-plusplus': 'off',
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
                '@typescript-eslint/lines-between-class-members': [
                    'error',
                    {
                        enforce: [
                            { blankLine: 'always', prev: 'field', next: 'method' },
                            { blankLine: 'always', prev: 'method', next: 'method' },
                        ],
                    },
                ],
                // From https://typescript-eslint.io/rules/no-unused-vars/
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'all',
                        argsIgnorePattern: '^_',
                        caughtErrors: 'all',
                        caughtErrorsIgnorePattern: '^_',
                        destructuredArrayIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                        ignoreRestSiblings: true,
                    },
                ],
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
                'react/prop-types': 'off',
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
