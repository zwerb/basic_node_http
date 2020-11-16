const express = require("express");
const path = require("path");

const app = express();

const html_path = "/html-express";

app.get("/", (req, res, next) => {
  res.send(`
    <html>
    <head>
      <title>Express Server</title>
    </head>
    <body>
      <h1>Hello from Node Express main page!</h1>
      <a href="/sandwiches">Sandwiches</a><br/>
      <a href="/puppies">Puppies</a>
    </body>
  </html>
  
    `);
});

let sandwiches_resource_path = "/sandwiches";

app.get(sandwiches_resource_path, (req, res, next) => {
  res.sendFile(path.join(__dirname + html_path + sandwiches_resource_path + "/index.html")
  );
});

let puppies_resource_path = "/puppies";

app.get(puppies_resource_path, (req, res, next) => {
  res.sendFile(
    path.join(__dirname + html_path + puppies_resource_path + "/index.html")
  );
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
