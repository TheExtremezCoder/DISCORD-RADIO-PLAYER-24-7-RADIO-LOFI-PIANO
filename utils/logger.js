const chalk = require("chalk");
const moment = require("moment");

module.exports = class Logger {
	static log (content, type = "log") {
		const date = `Kronix`;
		switch (type) {
	
		case "log": {
			return console.log(`[${chalk.green(date)}]: [${chalk.black.bgBlue(type.toUpperCase())}] ${chalk.blue(content)}`);
		}
		case "warn": {
			return console.log(`[${chalk.red(date)}]: [${chalk.black.bgMagenta(type.toUpperCase())}] ${chalk.blue(content)}`);
		}
		case "error": {
			return console.log(`[${chalk.yellow(date)}]: [${chalk.black.bgRed(type.toUpperCase())}] ${chalk.blue(content)}`);
		}
		case "debug": {
			return console.log(`[${chalk.yellow(date)}]: [${chalk.black.bgGreen(type.toUpperCase())}] ${chalk.blue(content)}`);
		}
		case "cmd": {
			return console.log(`[${chalk.yellow(date)}]: [${chalk.black.bgWhite(type.toUpperCase())}] ${chalk.blue(content)}`);
		}
		case "event": {
			return console.log(`[${chalk.yellow(date)}]: [${chalk.black.bgHex('#FFFFFF')(type.toUpperCase())}] ${chalk.blue(content)}`);
		}
		case "ready": {
			return console.log(`[${chalk.yellow(date)}]: [${chalk.blue.bgHex('#FF00FF')(type.toUpperCase())}] ${chalk.blue(content)}`);
		} 
		default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
		}
	}
};
