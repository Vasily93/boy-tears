const createResponse = () => {
 
  const response = `HTTP/1.1 200 OK
  Date: Sat, 09 Oct 2010 14:28:02 GMT
  Accept-Ranges: bytes
  Content-Length: 269
  Content-Type: application/json

  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  </head>
  <body>
  <h1>Example</h1>
  </body>
  </html>`;

  return response;

};

module.exports = createResponse;

// const pattern = /(?<method>[A-Z]*)\s(?<path>\/\w|.*)\sHTTP\/1.1/;

// const path = firstLine.match(pattern).groups.path;
// const method = firstLine.match(pattern).groups.method;