const { createServer } = require("node:http");

const server = createServer((_, res) => {
  res.end("hello");
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
