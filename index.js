var latex = require("./latex")

var text = "F = m \\cdot a"
var rendered = latex.render(text).then(function(resp) {
	console.log(resp)
})
