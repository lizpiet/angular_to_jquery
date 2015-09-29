var express = require('express');
var app = express();
var democrats = require("../models/democrats");
var republicans = require("../models/republicans")

app.get ('/', function(req, res){
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getrepublicans', function(req, res){
   res.send(republicans);
});

app.get('/getdemocrats', function(req, res){
    res.send(democrats);
});

app.use(express.static(__dirname +'/public'));

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port:', port);
});

module.exports = app;