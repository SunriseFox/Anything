module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['alloy', 'alloy/react', 'alloy/typescript'],
    plugins: ['prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
