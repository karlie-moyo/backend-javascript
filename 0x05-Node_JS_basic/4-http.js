/**
 * Simple HTTP server
 */
const http = require('http');

const host = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, resp) => {
  // eslint-disable-next-line no-param-reassign
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;
