/**
 * webpack.config.js — MyCustomTheme
 * Bundles CSS + JS with Tailwind CSS via PostCSS
 *
 * NOTE: The Salla CLI Watcher is built into `salla theme preview` — no extra npm plugin needed.
 */

const path               = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isDev = argv.mode !== 'production';

    return {
        mode:    isDev ? 'development' : 'production',
        devtool: isDev ? 'source-map' : false,

        entry: {
            theme: [
                './src/assets/scripts/theme.js',
                './src/assets/styles/theme.css',
            ],
        },

        output: {
            path:     path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js',
            clean:    true,
        },

        /* ── plugins MUST live here inside the return object ── */
        plugins: [
            new MiniCssExtractPlugin({ filename: 'css/theme.css' }),
        ],

        module: {
            rules: [
                /* JS — Babel transpile */
                {
                    test:    /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader:  'babel-loader',
                        options: { presets: ['@babel/preset-env'] },
                    },
                },
                /* CSS — MiniCssExtract → css-loader → postcss (Tailwind + Autoprefixer) */
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                    ],
                },
                /* Images */
                {
                    test:      /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                    type:      'asset/resource',
                    generator: { filename: 'images/[name][ext]' },
                },
                /* Fonts */
                {
                    test:      /\.(woff2?|eot|ttf|otf)$/i,
                    type:      'asset/resource',
                    generator: { filename: 'fonts/[name][ext]' },
                },
            ],
        },

        watch: isDev,

        watchOptions: {
            ignored:          /node_modules/,
            aggregateTimeout: 300,
        },

        stats: isDev ? 'errors-warnings' : 'normal',
    };
};
