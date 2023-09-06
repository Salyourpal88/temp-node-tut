const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(
    `<h1>LET'S GOOOOOOO</h1><p>We can't find the page you are looking for</p><a href="/">Back Home</a>`
  );
});

server.listen(5000);
