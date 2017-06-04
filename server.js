'use strict';

// const pg = require('pg');
const express = require('express');
// const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));
//app.use(express.static('./public'));

// Almost all URL's go to index
app.get('*', function (request, response) {
    console.log('New request:', request.url);
//    response.sendFile('public/index.html', {
//        root: '.'
//    });
    response.sendFile('index.html', {
        root: '.'
    });
});

// Port Listener
app.listen(port, function () {
    console.log('Server started on port ' + port + '!');
});
