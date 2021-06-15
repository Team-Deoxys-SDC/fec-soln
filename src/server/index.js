// Imports
const path = require('path');
const axios = require('axios');
const express = require('express');
const { API_URL, API_KEY } = require('./config');

// Express app
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));

// API proxy
app.use('/api/*', async (req, res) => {
  const payload = await axios({
    method: req.method.toLowerCase(),
    url: API_URL + req.originalUrl.slice(4), // slice off the api
    headers: { Authorization: API_KEY },
    data: req.body
  });

  res.send(payload.data);
});

// For react router
app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist')
  });
});


app.listen(3000, () => {
  console.log('Express server is listening on 3000');
});
