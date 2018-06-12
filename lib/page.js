const fs = require('fs');
const template = fs.readFileSync('./src/template.html', 'utf-8');

module.exports = {
  render({content, greeting}) {
    let page = template.replace('<!--greeting-->', greeting);
    return page.replace('<!--content-->', content);
  }
};
