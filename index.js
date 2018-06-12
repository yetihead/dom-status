const http = require('http');
const page = require('./lib/page');
const dom = require('./lib/dom');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  dom.getStatus().then(status => {
    res.end(page.render(status));
  })
});

server.listen(PORT, err => {
  if (err) {
    console.log(err.message);
  }
});
