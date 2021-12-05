// Flowlist Server
const url = require("url");
const fs = require("fs");
const port = 3000;
const http = require("http");
const lookup = require("mime-types").lookup;

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let pathway = parsedURL.pathway.replace(/^\/+|\/+$/g, "");
  if (pathway == "") {
    pathway = "main_index.html";
  }
  console.log(`Requested pathway ${pathway} `);

  let file = __dirname + pathway;
  fs.readFile(file, function(err, content) {
    if (err) {
      console.log(`File Not Found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      console.log(`Returning ${pathway}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      let mime = lookup(pathway);
      res.writeHead(200, {"Content-type": mime});
      res.end(content);
    }
  });
});

server.listen(port, "localhost", () => {
  console.log("Listening on port "+ port);
});