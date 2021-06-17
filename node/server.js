server.listen(8107, function() {
    server.on('close', function(){
    });
    server.on('error', function(err){
    });
    });
    function writeData(socket, data){
    var success = !socket.write(data);
    if (!success){
    (function(socket, data){
    socket.once('drain', function(){
    writeData(socket, data);
    });
    })(socket, data);
}
    }
    