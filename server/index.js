const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));
app.use(
  '/bower_components',
  express.static(path.join(__dirname, '../bower_components'))
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
