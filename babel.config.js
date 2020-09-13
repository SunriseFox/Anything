module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: 'last 1 Chrome version, last 1 firefox version',
            },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ];

    const plugins = ['@babel/plugin-syntax-class-properties'];

    return {
        presets,
        plugins,
    };
};
