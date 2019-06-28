// const server = require('../lib/server');
const parseRequest = require('../lib/parse-request');

describe('server routes', () => {
  describe('parse request', () => {
    const packet = `GET / HTTP/1.1
    User-Agent: PostmanRuntime/7.13.0
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: b6063dcb-627a-4ac7-80e3-a4e270469a0c
    Host: localhost:7890
    accept-encoding: gzip, deflate
    Connection: keep-alive`;

    it('returns an object', () => {
      const parsed = parseRequest(packet);
      expect(parsed).toEqual(expect.any(Object));
    });
   
    it('returns an object with path as a property', () => {
      const parsed = parseRequest(packet);
      expect(parsed.path).toEqual('/');
    });
 
    it('if the path is red', () => {
      const redPacket = `GET /red HTTP/1.1
      User-Agent: PostmanRuntime/7.13.0
      Accept: */*
      Cache-Control: no-cache
      Postman-Token: b6063dcb-627a-4ac7-80e3-a4e270469a0c
      Host: localhost:7890
      accept-encoding: gzip, deflate
      Connection: keep-alive`;
      const parsed = parseRequest(redPacket);
      expect(parsed.path).toEqual('/red');
      
    });

    it('checks method', () => {
      const redPacket = 'GET /red HTTP/1.1';
    
      const parsed = parseRequest(redPacket);
      expect(parsed.method).toEqual('GET');
    });
  });


});
