const createResponse = (parsedRequest) => {
  let httpResponse;
  if(parsedRequest.path === '/' && parsedRequest.method === 'GET') {
    httpResponse = `HTTP/1.1 200 OK
      Date: Sat, 09 Oct 2010 14:28:02 GMT
      Accept-Ranges: bytes
      Content-Length: 269
      Content-Type: application/html

      hi`;
  } else if(parsedRequest.path === '/' && parsedRequest.method === 'POST') {
    httpResponse = `HTTP/1.1 400 Bad Request
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Accept-Ranges: bytes
    Content-Length: 269
    Content-Type: application/html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SORRY MY FRIENDO</title>
    </head>
    <body>
    <h1>red</h1>
    </body>
    </html>`;

  } else if(parsedRequest.path === '/red') {
    httpResponse = `HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Accept-Ranges: bytes
    Content-Length: 269
    Content-Type: application/html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Red</title>
    </head>
    <body>
    <h1>red</h1>
    </body>
    </html>`;
  } else if(parsedRequest.path === '/green') {
    httpResponse = `HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Accept-Ranges: bytes
    Content-Length: 269
    Content-Type: application/html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Green</title>
    </head>
    <body>
    <h1>green</h1>
    </body>
    </html>`;
  } else if(parsedRequest.path === '/blue') {
    httpResponse = `HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Accept-Ranges: bytes
    Content-Length: 269
    Content-Type: application/html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blue</title>
    </head>
    <body>
    <h1>blue</h1>
    </body>
    </html>`;
  } else if(parsedRequest.path === '/dog') {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20lbs'
    };
    const JSONdog = JSON.stringify(dog);

    httpResponse = `HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Accept-Ranges: bytes
    Content-Length: 269
    Content-Type: application/json

    ${JSONdog}`;
  } else {
    httpResponse = `HTTP/1.1 404 Not Found
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Accept-Ranges: bytes
    Content-Length: 269
    Content-Type: application/html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Not FOund</title>
    </head>
    <body>
    <h1>NOT FOUND</h1>
    </body>
    </html>`;
  } 

  return httpResponse;
};

module.exports = createResponse;
