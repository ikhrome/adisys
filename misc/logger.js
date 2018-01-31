var winston = require('winston')
var adiLogger = new winston.Logger()
require('winston-telegram').Telegram

adiLogger.add(winston.transports.Console, {
	level: 'debug',
	colorize: true,
	timestamp: true
})

adiLogger.add(winston.transports.File, {
	level: 'error',
	filename: 'logs/errors.log',
	json: true
})

adiLogger.add(winston.transports.Telegram, {
	token : process.env.TELEGRAM_API_TOKEN,
	chatId : process.env.TELEGRAM_API_CHATID,
	level : 'error',
	unique: true,
	template : 'У нас ошибка! – [{level}] [{message}]'
})
module.exports = adiLogger
