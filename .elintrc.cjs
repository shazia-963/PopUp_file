// .eslintrc.cjs
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        // Add more rules as needed
    },
};
