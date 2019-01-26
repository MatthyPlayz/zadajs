const express = require('express');

const app = express();

module.exports = {
	port: port = 3000,
	write: function write(text) {
		app.get('/', (req, res) => {
  			res.send(arguments[0])
		});
	},
	write: function end(endText) {
		app.get('/', (req, res) => {
			res.end(arguments[0])
		})
	},
	cColor: cColor = {
		reset: Reset = "\x1b[0m",
		bright: Bright = "\x1b[1m",
		dim: Dim = "\x1b[2m",
		underscore: Underscore = "\x1b[4m",
		blink: Blink = "\x1b[5m",
		reverse: Reverse = "\x1b[7m",
		hidden: Hidden = "\x1b[8m",

		fgblack: FgBlack = "\x1b[30m",
		fgred: FgRed = "\x1b[31m",
		fggreen: FgGreen = "\x1b[32m",
		fgyellow: FgYellow = "\x1b[33m",
		fgblue: FgBlue = "\x1b[34m",
		fgmagenta: FgMagenta = "\x1b[35m",
		fgcyan: FgCyan = "\x1b[36m",
		fgwhite: FgWhite = "\x1b[37m",

		bgblack: BgBlack = "\x1b[40m",
		bgred: BgRed = "\x1b[41m",
		bggreen: BgGreen = "\x1b[42m",
		bgyellow: BgYellow = "\x1b[43m",
		bgblue: BgBlue = "\x1b[44m",
		bgmagenta: BgMagenta = "\x1b[45m",
		bgcyan: BgCyan = "\x1b[46m",
		bgwhite: BgWhite = "\x1b[47m"	
	}
}

app.listen(port, () => {
  console.log('Zada LOG: server started');
});