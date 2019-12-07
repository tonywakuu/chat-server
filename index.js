const express = require("express");
const app = express();
const port = 3700;

app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("page");
});


var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
	socket.emit('message', { message: 'Welcome to Uspeak' });
	socket.on('send', function (data) {
		io.sockets.emit('message', data);
	});
});
console.log("Listening on port " + port);