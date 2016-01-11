var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var express = require('express');
var request = require('request');
var giphyUrl = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
var links = [];

function initialize() {
	var imageUrl;
	request({
		url: giphyUrl + "&limit=10"
	}, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			data = JSON.parse(body).data;
			for (i = 0; i < 10; i++) {
				links.push(data[i].images.original.url);

				// Start server once 10 links loaded
				if (i == 9) {
					server.listen(80);
				}
			}
		}
	});
}

initialize();

app.use(express.static(__dirname + '/static')); 

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.get('/display', function(req, res) {
	res.sendFile(__dirname + '/display/index.html');
})

app.get('/gimme', function(req, res) {
	res.send(links.shift());
	request({
		url: giphyUrl.replace("trending", "random")
	}, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			data = JSON.parse(body).data;
			links.push(data.image_url);
			// console.log(links);
		}
	});
})

io.on('connection', function(socket) {
	console.log("A connection established");

	socket.on('zap', function(data) {
		console.log(data);
		io.emit('zapped', data);
	});
});
