const fs = require('fs');
const template = fs.readFileSync('./src/template.html', 'utf-8');

module.exports = {
  render(content) {
    return template.replace('<!--content-->', content);
  }
};
