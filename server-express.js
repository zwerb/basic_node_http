const express = require('express');

const app = express();

app.get('/',(req,res,next)=>{
    res.send(`
    <h1> Hello from Node Express main page!</h1>
    <a href="sandwiches">Sandwiches</a>
    `);
});

app.get('/sandwiches',(req,res,next)=>{
    res.send(`
    <h1> Sandwiches Node Express Page:</h1>
    <ul>
    <li>BLT</li>
    <li>Turkey</li>
    <li>Ham</li>
    <li>Compliment</li>
    </ul>
    `);
});

const PORT = 3030;
app.listen(PORT);