const https = require('https');

module.exports.getStatus = () => {
  return new Promise((res, rej) => {
    https.get('https://lidgroup.ru/objects/spb/vitamin/', (stream) => {
      let data = '';

      stream.on('data', chank => data += chank);

      stream.on('end', chunk => {
        data += chunk;
        let match = data.match(/Готовность дома (\d{2,3})/, data);
        res(`${match[1]}%`);
      });
    })
    .on('error', err => rej(err));
  });
}
