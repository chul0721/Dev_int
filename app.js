const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
let app = express();
const router = require('./router/main')(app);

let port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/public', express.static('public'));
app.use('/fontello', express.static('fontello'));

let server = app.listen(port, () => {
  console.log(`Server on : ${port}`);
})