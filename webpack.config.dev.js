const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorWebpackPlugin = require('friendly-errors-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const resolve = p => path.resolve(ROOT_PATH, p);
const PORT = 8085;
const BUNDLE_NAME = 'neetika-react-bundle';

module.exports = () => ({
	mode: 'development',
	context: resolve('src'),

	entry: [
		`webpack-dev-server/client?http://localhost:${PORT}`,
		'webpack/hot/only-dev-server',
		'babel-polyfill',
		'./index.js',
	],

	devtool: 'eval-source-map',

	output: {
		publicPath: '/',
		path: resolve('build/dev'),
		filename: `${BUNDLE_NAME}.js`,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							camelCase: true,
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]__[local]--[hash:base64:5]',
						},
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
			{
				test: /\.svg$/,
				use: ['svg-url-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
					},
				],
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader',
					},
				],
			},
		],
	},

	resolve: {
		modules: [resolve('src'), resolve('node_modules')],
	},

	plugins: [
		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true,
			cwd: process.cwd(),
		}),
		new FriendlyErrorWebpackPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			__DEV__: true,
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new HTMLWebpackPlugin({
			template: resolve('src/index.html'),
			showErrors: true,
			inject: false,
		}),
	],

	devServer: {
		stats: 'minimal',
		hot: true,
		publicPath: '/',
		port: PORT,
		host: 'localhost',
		historyApiFallback: true,
		noInfo: false,
	},
});
