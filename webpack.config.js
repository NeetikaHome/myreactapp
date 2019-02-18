/* eslint-disable */

function buildConfig(env) {
	env = env || 'dev';
	return require(`./webpack.config.${env}.js`)({ env });
}

module.exports = buildConfig;

/* eslint-enable */