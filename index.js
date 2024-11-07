const http = require("http");
const url = require("url");
const fs = require("fs");

const routes = {
  "/": "./index.html",
  "/about": "./about.html",
  "/contact-me": "./contact-me.html",
};

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    //checks routes to see if one of the req url pathnames has a key to our routes
    let filename = routes[q.pathname] || "./404.html";

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 not found");
        return res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);

//npx kill-port port to clear it up
