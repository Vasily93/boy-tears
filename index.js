const server = require('./lib/server');

server.listen(7890, () => {
  console.log('server is listening');
});
