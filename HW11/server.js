const http = require('http');
const os = require('os');
const path = require('path');

http
  .createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`
    <p>Current user name:${os.userInfo().username}</p>
    <p>OS type:${os.type()}</p>
    <p>System work time:${os.cpus()[0].times.user / 6000} minutes</p>
    <p>Current work directory:${path.dirname(__filename)}</p>
    <p>Server file name:${path.basename(__filename)}</p>
    `);
  })
  .listen(5000);
console.log('Server ruuning at http');
