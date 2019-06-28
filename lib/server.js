const { createServer } = require('net');
const parseRequest = require('../lib/parse-request'); 
const createResponse = require('../lib/create-response');

const server = createServer(sock => {
  console.log('client connected');

  sock.on('data', packet => {
    const parsed = parseRequest(packet.toString());
    const response = createResponse(parsed);
    sock.write(response);
    sock.end();
    console.log(response);
    console.log('from client', packet.toString());
  });
});

module.exports = server;
