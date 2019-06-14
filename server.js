const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const port = '5555';

app.use(cors());

app.use(express.static(path.join(__dirname + '/index.html')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log(`App hosted on port ${port}`);
});
