var latex = require("./latex")

exports.handler = async function (event, context) {
	var text = event.text
	var rendered = await latex.render(text)
	context.succeed(rendered);
};
