const express = require('express');
const logger = require('morgan');
const fetch = require('node-fetch');

const validateQuery = require('./query.validator');
const errorHandler = require('./error.handler');
const parser = require('./foodco_parser');

const app = express();
const url = 'https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=0083&language=fi';

app.use(logger('dev'));
app.get('/menus', validateQuery, async (req, res, next) => {
    try {
        const APIresponse = await fetch(url);
        const data = await APIresponse.json();
        res.send(parser.parseData(data, req.query.action));
    } catch (e) {
        e.statusCode = 503;
        next(e);
    }  
});

app.use(errorHandler);

//add the router
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');