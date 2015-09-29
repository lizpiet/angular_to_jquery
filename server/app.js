var express = require('express');
var app = express();
var democrats = require("../models/democrats.json");
var republicans = require("../models/republicans.json")

app.get ('/', function(req, res){
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getRepublicans', function(req, res){
   res.send(republicans);
});

app.get('/getDemocrats', function(req, res){
    res.send(democrats);
});

app.use(express.static(__dirname +'/public'));

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port:', port);
});

module.exports = app;