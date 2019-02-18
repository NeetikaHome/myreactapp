const path = require('path');
const webpack = require('webpack');
const BUNDLE_NAME = 'neetika-react-bundle';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanPlugin = require('clean-webpack-plugin');


const ROOT_PATH = path.resolve(__dirname);
const resolve = p => path.resolve(ROOT_PATH, p);



module.exports = () => ({
		mode: 'production',
		context: path.resolve(ROOT_PATH, 'src'),
		entry: ['babel-polyfill', './index.js'],
		output: {
			publicPath: '',
			path: path.resolve(ROOT_PATH, 'build/prod'),
			filename: `${BUNDLE_NAME}.js`
		},
		module: {
			rules : [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use:[
						{
							loader: 'babel-loader',
							options: {
								cacheDirectory: true
							}
						}
					]
				},
				{
					test: /\.css$/,
					use:[
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								camelCase: true,
								modules: true,
								importLoaders: 1,
							}
						},
						{ loader: 'postcss-loader' },
					]
				},
				{
					test: /\.svg$/,
					use: 'svg-url-loader'
				},
				{
					test: /\.(png|jpe?g|gif)(\?.*)?$/,
					use: [
						{
							loader: 'url-loader',
							options:{
								limit: 8192,
								name: 'img/[name].[hash:7].[ext]'

							}


						}
					]
				}

			]
		},
		resolve: {
			modules: [resolve('src'), resolve('node_modules')],
		},

		plugins : [
			new CleanPlugin(['build/prod'], {
				root: ROOT_PATH,
				verbose: true,
			}),
			new webpack.DefinePlugin({
				__DEV__: false,
				'process.env.NODE_ENV': JSON.stringify('production'),
				__ROOT_ELEMENT_ID__: JSON.stringify('react_root'),
				__PORTAL_ELEMENT_ID__: JSON.stringify('react_portal_root'),
			}),
			new MiniCssExtractPlugin({ filename: `${BUNDLE_NAME}.css` }),
			new webpack.optimize.MinChunkSizePlugin({
				minChunkSize: 51200, // ~50kb
			}),
			new webpack.LoaderOptionsPlugin({
				minimize: true,
			}),
		]

})