// run `node index.js` in the terminal

const createServer = require('http').createServer;

// console.log(`Hello Node.js v${process.versions.node}!`);

console.log(
  createServer((req, res) => {
    res.end('o');
  }).listen(3000)
);
