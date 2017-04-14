var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var http = require('http');
var morgan = require('morgan');
var config = require('./config');
var passport = require('passport');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/public',express.static(path.join(__dirname,'/public')));
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(morgan('dev'));
app.set('mysecret', config.secret);


//Route
var router = require('./routes');
app.use('/api', router);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const port = process.env.PORT || '8888';
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));


//http://localhost:8888/test
app.get('/test',function(req,res){
    res.send('Hello highspeed');
})

exports = module.exports = app;

