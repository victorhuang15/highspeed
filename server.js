var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var morgan = require('morgan');
var config = require('./config');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/ui',express.static(path.join(__dirname,'/ui')));
app.use(morgan('dev'));
app.set('mysecret', config.secret);



//Route
var router = require('./routes');
app.use('/api', router);




// Initialize the app.
var server = app.listen(process.env.PORT || 8888, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//http://localhost:8888/test
app.get('/test',function(req,res){
    res.send('Hello highspeed');
})

exports = module.exports = app;

