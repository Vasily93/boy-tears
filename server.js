const { createServer } = require('net');

const server = createServer(sock => {
  console.log('client connected');

  sock.on('data', packet => {
    console.log('from client', packet.toString());
  });
});

server.listen(7890, () => {
  console.log('server is listening');
});
