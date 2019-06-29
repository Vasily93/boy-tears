const server = require('../lib/server');
const parseRequest = require('../lib/parse-request');
const request = require('supertest');

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

  describe('testing our response', () => {
    it('we send a response', done => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.text).toEqual(expect.any(String));
          done();
        });
          
    });

    it('we send a response', done => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.text).toEqual(expect.stringContaining('hi'));
          done();
        });    
    });
    it('we send a sorry 400 response', done => {
      return request(server)
        .post('/')
        .then(res => {
          expect(res.text).toEqual(expect.stringContaining('SORRY MY FRIENDO'));
          done();
        });    
    });
    it('we send a response red', () => {
      return request(server)
        .get('/red')
        .then(res => {
          expect(res.text).toEqual(expect.stringContaining('red'));
        });    
    });
    it('we send a response green', () => {
      return request(server)
        .get('/green')
        .then(res => {
          expect(res.text).toEqual(expect.stringContaining('green'));
        });    
    });
    it('we send a response blue', () => {
      return request(server)
        .get('/blue')
        .then(res => {
          expect(res.text).toEqual(expect.stringContaining('blue'));
        });    
    });
  });
});
