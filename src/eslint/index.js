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
    overrides: [
        /**
         * Typescript
         */
        {
            files: ['**/*.{ts,tsx}'],
            extends: ['airbnb-typescript'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: 'tsconfig.json',
            },
        },
        /**
         * React
         */
        {
            files: ['**/*.{jsx,tsx}'],
            extends: ['airbnb', 'airbnb/hooks'],
            parser: '@typescript-eslint/parser',
        },
        /**
         * Testing library
         */
        {
            files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react'],
            parser: '@typescript-eslint/parser',
        },
    ],
};
