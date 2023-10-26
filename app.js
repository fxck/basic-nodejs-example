const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Zerops!');
});

app.get('/test', (req, res) => {
  res.send('test');
});

app.get('/version', (req, res) => {
  res.send(`Node.js ${process.version}`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
