const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {
        service: 'projects-service'
    },
    transports: [
        new winston.transports.File({
            filename: 'src/logs/projects/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'src/logs/projects/info.log',
            level: 'info'
        }),
        new winston.transports.File({
            filename: 'src/logs/projects/combined.log'
        }),
    ],
});

module.exports = logger;