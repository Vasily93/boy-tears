const parseRequest = (packetString) => {

  const arrayifiedPacket = packetString.split('\n');
  const firstLine = arrayifiedPacket[0];

  const pattern = /(?<method>[A-Z]*)(?<path>\/\w|.*)\sHTTP\/1.1/;
  const match = firstLine.match(pattern).groups;

  const path = firstLine.match(pattern).groups.path;
  const method = firstLine.match(pattern).groups.method;

  console.log('Path: ', path);
  console.log('Method: ', method);

 
  return {
    path: '/',
  };
};

module.exports = parseRequest;
