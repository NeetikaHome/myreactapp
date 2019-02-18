const postcssImport = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');
const rucksackCss = require('rucksack-css');
const cssnano = require('cssnano');

module.exports = {
	plugins: [
		postcssImport({
			path: ['./src/styles'],
		}),
		postcssCssnext(),
		rucksackCss(),
		cssnano({
			autoprefixer: false,
			discardComments: {
				removeAll: true,
			},
			discardUnused: false,
			mergeIdents: false,
			reduceIdents: false,
			safe: true,
			sourcemap: true,
		}),
		postcssReporter,
	],
};