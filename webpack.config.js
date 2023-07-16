// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: {
        kuromoji: './src/kuromoji.js',
    },
    experiments: {
        outputModule: true,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        library: {
            name: 'kuromoji',
            type: 'umd',
          },
          globalObject: 'this',
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        fallback: { path: require.resolve('path-browserify')},
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

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
