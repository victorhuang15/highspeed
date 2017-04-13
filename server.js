var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/html',express.static(path.join(__dirname,'static/html')));
app.use('/css',express.static(path.join(__dirname,'static/css')));
app.use('/js',express.static(path.join(__dirname,'static/js')));


// Initialize the app.
var server = app.listen(process.env.PORT || 8888, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

// ROUTES
var router = express.Router();

//http://localhost:8888/api/test
router.get('/test', function(req,res){
  res.json({message: 'Hi, highspeed!'});
});

app.use('/api', router);

//http://localhost:8888/test
app.get('/test',function(req,res){
    res.send('Hello highspeed');
})

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

