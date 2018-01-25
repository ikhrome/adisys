var winston = require('winston')
var adiLogger = new winston.Logger()

adiLogger.add(winston.transports.Console, {
  level: 'debug',
  colorize: true
})

adiLogger.add(winston.transports.File, {
  level: 'error',
  filename: 'logs/errors.log',
  json: true
})

module.exports = adiLogger
