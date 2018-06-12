const http = require('http');
const page = require('./lib/page');
const dom = require('./lib/dom');
const PORT = process.env.PORT || 3000;
const greeting = process.env.greeting || 'Hello, user!';

const server = http.createServer((req, res) => {

  dom.getStatus().then(status => {
    res.end(page.render({
      content: status,
      greeting
    }));
  })
});

server.listen(PORT, err => {
  if (err) {
    console.log(err.message);
  }
});
