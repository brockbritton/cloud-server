
'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('API Server running on ::', port);
    });
  },
  app,
};