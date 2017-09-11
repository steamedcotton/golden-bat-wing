const express = require('express');
const { addNumbers } = require('./lib/mathStuff');
const app = express();

app.get('/', (req, res) => {
   res.send('This is NEW!!!');
});

app.get('/add/:x/plus/:y', (req, res) => {
    const { x, y } = req.params;
    console.log(`Adding ${x} + ${y}`);
    const sum = addNumbers(parseInt(x), parseInt(y));
    res.send(`${x} plus ${y} equals ${sum}`);
});

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
