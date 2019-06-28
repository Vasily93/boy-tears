# boy-tears

##goals: 

make a server with only the net module that responds to requests with different paths, and responds to anything else with 404.

##steps:

1. make a server file and a basic server setup using the net module
1. make a test file and test for path '/' request to return response of string
1. make a function that returns an HTTP packet
    1. contains content-length in bytes
1. return correct responses for all paths listed
1. if path doesn't exist return 404


GET / HTTP/1.1
User-Agent: PostmanRuntime/7.13.0
Accept: */*
Cache-Control: no-cache
Postman-Token: b6063dcb-627a-4ac7-80e3-a4e270469a0c
Host: localhost:7890
accept-encoding: gzip, deflate
Connection: keep-alive

GET /red HTTP/1.1
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 69fb125f-dbc4-47ba-bf51-377380bd6882
Host: localhost:7890
accept-encoding: gzip, deflate
Connection: keep-alive

POST / HTTP/1.1
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 373db71d-2963-4adc-8064-b3230a89aa0b
Host: localhost:7890
accept-encoding: gzip, deflate
content-length: 0
Connection: keep-alive

'GET / HTTP/1.1',
      '    User-Agent: PostmanRuntime/7.13.0',
      '    Accept: */*',
      '    Cache-Control: no-cache',
      '    Postman-Token: b6063dcb-627a-4ac7-80e3-a4e270469a0c',
      '    Host: localhost:7890',
      '    accept-encoding: gzip, deflate',
      '    Connection: keep-alive'