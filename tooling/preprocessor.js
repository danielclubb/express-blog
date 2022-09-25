module.exports = {
	process(source) {
		console.log('preprocessor called');
		return `
			const Handlebars = require('handlebars');
			module.exports = Handlebars.compile(\`${source}\`);
		`;
	}
};
