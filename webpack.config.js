const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        bundle: './src/script/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        port: 8888,
        hot: true,
        // host: '169.254.84.101',
        open: true,
        historyApiFallback: true,
        noInfo: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    preset: ['latest']
                },
                include: [
                    path.resolve(__dirname, 'dist')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ // link css
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'file-loader',
                query: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.jpg|\.png$/,
                loader: 'file-loader',
                query: {
                    name: 'img/[name]-[hash:5].[ext]'
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': './src',
            'jquery': 'jquery'
        },
        extensions: ['.js', '.vue'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热加载
        new ExtractTextPlugin('style.css'), // link css
        // new UglifyJSPlugin(), // 压缩js
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}