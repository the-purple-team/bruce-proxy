const express = require('express');
const app = express();

const port = '5555';

app.use(express.static(__dirname + '/index.html'));

app.get('/', () => {
  res;
});

app.listen(port, () => {
  console.log(`App hosted on port ${port}`);
});
