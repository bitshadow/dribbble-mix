const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', cors(corsOptions),routes.handleRequest);

app.listen(app.get('port'), function() {
    console.log(`Example app listening on port ${app.get('port')}!`)
});
