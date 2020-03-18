const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, './site'),
        historyApiFallback: true,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'site'),
        filename: 'bundle.js'
    },
    devtool: isDev && 'eval-source-map',
    mode: 'development',
    watch: true,
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.resolve('./dev/static'), to: path.resolve('.site') }
        ]),
    ],
};