const parseRequest = (packetString) => {

  const arrayifiedPacket = packetString.split('\n');
  const firstLine = arrayifiedPacket[0];

  const pattern = /(?<method>[A-Z]*)\s(?<path>\/\w|.*)\sHTTP\/1.1/;

  const path = firstLine.match(pattern).groups.path;
  const method = firstLine.match(pattern).groups.method;

  return {
    path,
    method
  };
};

module.exports = parseRequest;
