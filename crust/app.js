// load config
var config = require('./config')();
require("../lib/components")();
global.Packages.Oyster.Utils.logger("app_name"); //setting up logger info

var express = require('express'),
app = module.exports = express();
// require("./components/index")(); // this will load all external components that will be consumed

// all environments
app.set('title', 'Entropy');
process.env.PORT = config.port;

// development only
if ('development' == app.get('env')) {
    //app.set('db uri', 'localhost/dev');
}

// production only
if ('production' == app.get('env')) {
    
}


app.use(express.bodyParser()); //request bodyparsing to json
app.use(express.methodOverride()); // enable PUT and DELETE http methods
app.use(express.compress()); // compress response data with gzip / deflate

// views
app.set("views", __dirname + "/public/views"); // setting view path
app.set("view engine", 'html');

app.use(express.static(__dirname + '/public')); //for static files to serve directly.
app.use(global.Packages.Oyster.Middleware.allow_ajax); // allowing app to deal with ajax calls
app.engine('html', require('ejs').renderFile); //mapping html to ejs renderer for rendering html files
app.use(global.Packages.Oyster.Middleware.param_object); // this middleware add method "" in request object that iterates all params in request object and create object

app.use(app.router);

require("./routes")(app); // load all routes

app.use(global.Packages.Oyster.Middleware.error_handler); // to handle all the errors that are raised on app (should pass express cycle for e.g must call next(err); )

require("./global_async")().then(function () {
    app.listen(process.env.PORT); // this method is identical to http.createServer(app).listen(port);
    global.Logger.info("app started at port: " + process.env.PORT);
}).error(function (e) {
    //log error here
    global.logger.crash(e);
});
// start
