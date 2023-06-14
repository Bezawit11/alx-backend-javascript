/**
 *creating a server object
 * */
const http = require('http');

let options = {
    host:'',
    path: '/students',
    method: 'GET'
};
const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);

module.exports = app;
