const express = require('express');
const path = require('path');

const app = express();

const html_path = '/html-express'

app.get('/',(req,res,next)=>{
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

app.get('/sandwiches',(req,res,next)=>{
    res.send(`
    <h1> Sandwiches Node Express Page:</h1>
    <a href="/">Home</a>
    <ul>
    <li>BLT</li>
    <li>Turkey</li>
    <li>Ham</li>
    <li>Compliment</li>
    </ul>
    `);
});

let resource_path = '/puppies';

app.get(resource_path,(req,res,next)=>{
    res.sendFile(path.join(__dirname + html_path + resource_path + '/index.html'));
});

const PORT = 3030;
app.listen(PORT);