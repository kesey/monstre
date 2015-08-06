var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));  //__dirname -> dossier courant (ex: C:\Users\learning1\Documents\workspace\projects\front\first_server_nodejs)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');

exports.app = app;