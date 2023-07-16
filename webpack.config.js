// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: {
        kuromoji: './src/kuromoji.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'commonjs2',
    },
    optimization: {
        minimize: false,
        splitChunks: {
          chunks: 'initial'
        }
    },
    resolve: {
        fallback: { 
            path: require.resolve('path-browserify'),
            zlib: require.resolve('browserify-zlib'),
            stream: require.resolve('stream-browserify'),
            fs: false,
        },
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.gz$/,
                exclude: /node_modules/,
                use: 'binary-base64-loader',
              }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
