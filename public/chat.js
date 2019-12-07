window.onload = function() {

	const messages = [];
	const socket = io.connect('http://localhost:3700');
	const field = document.getElementById("field");
	const sendButton = document.getElementById("send");
	const content = document.getElementById("content");
	const name = document.getElementById("name");

	socket.on('message', function (data) {
		if(data.message) {
			messages.push(data);
			var html = '';
			for(var i=0; i<messages.length; i++) {
				html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
				html += messages[i].message + '<br />';
			}
			content.innerHTML = html;
		} else {
			console.log("There was a problem:", data);
		}
	});

	sendButton.onclick = sendMessage = function() {
		if(name.value == "") {
			alert("Please enter your name!");
		} else {
			var text = field.value;
			socket.emit('send', { message: text, username: name.value });
			field.value = "";
		}
	};

}
$(document).ready(function() {
	$("#field").keyup(function(e) {
		if(e.keyCode == 13) {
			sendMessage();
		}
	});
});
