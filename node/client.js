var net = require('net');

var server = net.createServer(function(client) {
client.setTimeout(500);
client.setEncoding('utf8');
client.on('data', function(data) {
writeData(client, 'Sending: ' + data.toString());
});

client.on('end', function() {
server.getConnections(function(err, count){
});
});
client.on('error', function(err) {
});
client.on('timeout', function() {
});
});