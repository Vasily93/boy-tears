const parseRequest = (packetString) => {

  const arrayifiedPacket = packetString.split('\n');
  const trimmed = arrayifiedPacket.map(line => line.trim());

  console.log(trimmed);


  return {
    path: '/',

  };
};

module.exports = parseRequest;
