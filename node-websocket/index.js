var http= require('http'),io= require('socket.io'),fs=require("fs"); 
var server= http.createServer(function(req, res){ 
  fs.readFile(__dirname+'/index.html',function(err,data){ 
    if(err){ 
      throw err;
    }
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    res.end(data.toString()); 
  });
}); 
server.listen(8080); 
var socket= io.listen(server); 
socket.on('connection', function(socket){ 
  socket.on('reqData', function (data) {
    socket.emit('resData', data);//服务端返回数据
  });
});

