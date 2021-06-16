var express = require('express');
var winston = require('winston'); // for transports.Console

const app = express();
const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: 'logs/example.log'
        })
    ]
};
const logger = winston.createLogger(logConfiguration);

app.get('/', (req, res) => {
    logger.info('in / endpoint');
    res.json({
        message: 'Hello World'
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Service listening on port ${port}`));
